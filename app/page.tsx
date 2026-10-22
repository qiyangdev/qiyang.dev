import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="rounded-full"
          src="/avatar.jpeg"
          alt=""
          width={100}
          height={100}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Qiyang Wang
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Software engineer passionate about building thoughtful products and
            exploring AI.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://github.com/qiyangdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="block dark:hidden h-[14px] w-4"
              src="/GitHub_dark.svg"
              alt="GitHub"
              width={24}
              height={24}
            />
            <Image
              className="hidden dark:block h-[14px] w-4"
              src="/GitHub_light.svg"
              alt="GitHub"
              width={24}
              height={24}
            />
            GitHub
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[79px]"
            href="https://x.com/qiyangdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="block dark:hidden h-[14px] w-4"
              src="/X_light.svg"
              alt="GitHub"
              width={24}
              height={24}
            />
            <Image
              className="hidden dark:block h-[14px] w-4"
              src="/X_dark.svg"
              alt="GitHub"
              width={24}
              height={24}
            />
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[79px]"
            href="https://linkedin.com/wangqiyang"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="block h-[14px] w-4"
              src="/linkedin.svg"
              alt="LinkedIn"
              width={24}
              height={24}
            />
          </a>
        </div>
      </main>
    </div>
  );
}
