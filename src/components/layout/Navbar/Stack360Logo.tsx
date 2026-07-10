'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Stack360Logo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href="/"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group flex shrink-0 items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      {/* Persistent Icon Image */}
      <div className="relative h-8 w-8 shrink-0 transition-transform duration-200 group-hover:scale-105">
        <Image
          src="/favicon.svg"
          alt="Stack360 Logo"
          width={32}
          height={32}
          priority
          className="h-full w-full rounded-sm object-contain"
        />
      </div>

      {/* Pop Out Text Container */}
      <motion.div
        initial={false}
        animate={{
          width: isHovered ? 'auto' : 0,
          opacity: isHovered ? 1 : 0,
          marginLeft: isHovered ? 8 : 0, // Maps perfectly to gap-sm (0.5rem)
        }}
        transition={{
          type: 'spring',
          stiffness: 180,
          damping: 18,
          restDelta: 0.01,
        }}
        className="overflow-hidden whitespace-nowrap"
      >
        <span className="font-sans text-lg font-bold tracking-tight text-neutral-950 select-none">
          Stack<span className="text-primary">360</span>
        </span>
      </motion.div>
    </Link>
  );
}
