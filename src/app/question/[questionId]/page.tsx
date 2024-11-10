"use server";

import Image from "next/image";
import styles from "../../page.module.css";

/**
 * 题库详情页
 * @constructor
 */
export default async function BankPage({ params }) {
  const { questionBankId } = params;
  return (
    // 居中的格式
    <div className={styles.page}>
      <main className={styles.main}>


        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <ol>
          <li>
            <span className={styles.artText}>
              查看更多功能，尽请期待
            </span>
          </li>
          <li>
            Get started by editing <code>src/app/bank/[questionBankId]/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>


      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
