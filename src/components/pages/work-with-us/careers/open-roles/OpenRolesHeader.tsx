import { CAREERS_OPEN_ROLES } from '@/constants/component/careers-data';

export default function OpenRolesHeader() {
  const roleCount = CAREERS_OPEN_ROLES?.length ?? 0;

  return (
    <header className="mb-lg flex flex-col gap-md sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-3xl space-y-xs">
        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
          Current Opportunities
        </span>
        <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900 md:text-3xl">
          Search Jobs Here
        </h2>
      </div>
      <span className="rounded-full border border-primary/20 bg-primary/10 px-md py-xs font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
        {roleCount ? `${roleCount} Open Role${roleCount > 1 ? 's' : ''}` : 'Fully Staffed'}
      </span>
    </header>
  );
}
