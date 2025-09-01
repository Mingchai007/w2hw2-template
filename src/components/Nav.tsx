'use client'
import Link from 'next/link'
import { useState } from 'react'


export default function Nav() {
    const [open, setOpen] = useState(false)
    return (
        <header className="sticky top-0 z-50 border-b border-gray-900 bg-black/80 backdrop-blur">
            <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4">
                <Link href="/" className="font-bold tracking-wide text-white">Portfolio</Link>
                <button
                    className="rounded-lg border border-gray-800 bg-gray-900 px-3.5 py-1.5 text-sm font-medium text-gray-200 transition-colors hover:bg-gray-800 md:hidden"
                    aria-label="Toggle navigation"
                    aria-expanded={open}
                    aria-controls="primary-nav"
                    onClick={() => setOpen(!open)}
                >Menu</button>
                <nav
                    id="primary-nav"
                    className="hidden items-center gap-8 text-sm font-medium text-gray-400 md:flex"
                >

                    <a href="#skills" className="transition-colors hover:text-white">Skills</a>
                    <a href="#projects" className="transition-colors hover:text-white">Projects</a>
                    <a href="#contact" className="transition-colors hover:text-white">Contact</a>
                </nav>
            </div>
            {/* Mobile menu */}
            {open && (
                <div className="md:hidden">
                    <nav className="absolute right-4 top-16 flex w-52 flex-col gap-2 rounded-lg border border-gray-900 bg-gray-900 p-3 text-sm shadow-xl">
                        <a href="#about" className="rounded-lg px-4 py-2.5 text-gray-200 transition-colors hover:bg-gray-800">About</a>
                        <a href="#skills" className="rounded-lg px-4 py-2.5 text-gray-200 transition-colors hover:bg-gray-800">Skills</a>
                        <a href="#projects" className="rounded-lg px-4 py-2.5 text-gray-200 transition-colors hover:bg-gray-800">Projects</a>
                        <a href="#contact" className="rounded-lg px-4 py-2.5 text-gray-200 transition-colors hover:bg-gray-800">Contact</a>
                    </nav>
                </div>
            )}
        </header>
    )
}