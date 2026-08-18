'use client';

import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { type DropdownOption, DropdownOptions } from '@/components/core';
import { EASE_OUT_EXPO, MotionStaggerItem } from '@/components/shared/motion';
import { cn } from '@/styles/tailwind.utils';
import { formatWorkModeLabel, toNamedOptions } from './open-roles-mappers';
import { useOpenRolesCatalog } from './open-roles-provider';

interface OpenRolesFilterBarProps {
  selectedJobType: string;
  selectedMode: string;
  selectedDept: string;
  selectedDesignation: string;
  onJobTypeChange: (value: string) => void;
  onWorkModeChange: (value: string) => void;
  onDepartmentChange: (value: string) => void;
  onDesignationChange: (value: string) => void;
}

interface FilterField {
  key: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly DropdownOption[];
}

const fieldVariants = {
  hidden: { opacity: 0, y: 8 },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, delay: index * 0.05, ease: EASE_OUT_EXPO },
  }),
};

function FilterFields({
  fields,
  showLabels,
  animate = false,
}: {
  fields: readonly FilterField[];
  showLabels: boolean;
  animate?: boolean;
}) {
  return fields.map((field, index) => {
    const body = (
      <>
        {showLabels ? (
          <p className="px-px font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500">
            {field.label}
          </p>
        ) : null}
        <DropdownOptions
          label={field.label}
          value={field.value}
          onChange={field.onChange}
          options={field.options}
        />
      </>
    );

    if (!animate) {
      return (
        <div key={field.key} className="min-w-0 space-y-xs">
          {body}
        </div>
      );
    }

    return (
      <motion.div
        key={field.key}
        custom={index}
        variants={fieldVariants}
        initial="hidden"
        animate="show"
        className="min-w-0 space-y-xs"
      >
        {body}
      </motion.div>
    );
  });
}

export default function OpenRolesFilterBar({
  selectedJobType,
  selectedMode,
  selectedDept,
  selectedDesignation,
  onJobTypeChange,
  onWorkModeChange,
  onDepartmentChange,
  onDesignationChange,
}: OpenRolesFilterBarProps) {
  const { filters } = useOpenRolesCatalog();
  const data = filters.data;
  const panelId = useId();
  const reduced = useReducedMotion();
  const didSyncFromQuery = useRef(false);
  const activeCount = [selectedJobType, selectedMode, selectedDept, selectedDesignation].filter(
    Boolean
  ).length;
  const [isOpen, setIsOpen] = useState(false);
  const [clipPanel, setClipPanel] = useState(true);

  useEffect(() => {
    if (didSyncFromQuery.current) {
      return;
    }

    didSyncFromQuery.current = true;
    if (activeCount > 0) {
      setIsOpen(true);
    }
  }, [activeCount]);

  const workModeOptions = useMemo(
    () =>
      (data?.workModes ?? []).map((mode) => ({ value: mode, label: formatWorkModeLabel(mode) })),
    [data?.workModes]
  );

  const jobTypeOptions = useMemo(() => toNamedOptions(data?.jobTypes), [data?.jobTypes]);

  const departmentOptions = useMemo(() => toNamedOptions(data?.departments), [data?.departments]);

  const designationOptions = useMemo(() => {
    const departments = data?.departments ?? [];
    const source = selectedDept
      ? departments.filter((dept) => dept.id === selectedDept)
      : departments;

    return source.flatMap((dept) =>
      dept.designations.map((role) => ({
        value: role.id,
        label: selectedDept ? role.name : `${dept.name} · ${role.name}`,
      }))
    );
  }, [data?.departments, selectedDept]);

  const filterFields: FilterField[] = [
    {
      key: 'job-type',
      label: 'Job Type',
      value: selectedJobType,
      onChange: onJobTypeChange,
      options: jobTypeOptions,
    },
    {
      key: 'work-mode',
      label: 'Work Mode',
      value: selectedMode,
      onChange: onWorkModeChange,
      options: workModeOptions,
    },
    {
      key: 'department',
      label: 'Department',
      value: selectedDept,
      onChange: onDepartmentChange,
      options: departmentOptions,
    },
    {
      key: 'designation',
      label: 'Designation',
      value: selectedDesignation,
      onChange: onDesignationChange,
      options: designationOptions,
    },
  ];

  const canAnimate = reduced === false;

  return (
    <MotionStaggerItem className="mb-[calc(1rem+0.25vw)]">
      <button
        type="button"
        className={cn(
          'flex min-h-12 w-full items-center gap-sm rounded-xl border px-md text-sm font-semibold shadow-xs transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:hidden',
          isOpen
            ? 'border-neutral-200 bg-neutral-100 text-neutral-900'
            : 'border-neutral-200 bg-neutral-50 text-neutral-800 hover:border-neutral-300 hover:bg-white'
        )}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((open) => !open)}
      >
        <SlidersHorizontal className="size-4 shrink-0 text-neutral-500" aria-hidden />
        <span>Filters</span>
        {activeCount > 0 ? (
          <span className="rounded-full bg-primary/10 px-sm py-px font-mono text-[10px] font-bold uppercase tracking-wider text-primary">
            {activeCount} applied
          </span>
        ) : (
          <span className="font-normal text-neutral-500">Optional</span>
        )}
        <ChevronDown
          aria-hidden
          className={cn(
            'ml-auto size-4 shrink-0 text-neutral-400 transition-transform duration-200',
            isOpen && 'rotate-180 text-primary'
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            id={panelId}
            initial={canAnimate ? { height: 0, opacity: 0 } : false}
            animate={{ height: 'auto', opacity: 1 }}
            exit={canAnimate ? { height: 0, opacity: 0 } : undefined}
            transition={{ duration: 0.32, ease: EASE_OUT_EXPO }}
            onAnimationStart={() => setClipPanel(true)}
            onAnimationComplete={() => setClipPanel(false)}
            className={cn(
              'mt-sm rounded-xl border border-neutral-200 bg-neutral-100 lg:hidden',
              clipPanel ? 'overflow-hidden' : 'overflow-visible'
            )}
          >
            <div className="grid gap-md p-md">
              <FilterFields fields={filterFields} showLabels animate={canAnimate} />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="hidden lg:grid lg:grid-cols-4 lg:gap-sm">
        <FilterFields fields={filterFields} showLabels={false} />
      </div>
    </MotionStaggerItem>
  );
}
