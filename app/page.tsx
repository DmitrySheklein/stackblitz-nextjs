import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Image
        className=""
        src="/images/test.svg"
        alt=""
        width={180}
        height={37}
        priority
      />
      <Image
        className=""
        src="/public/testimage.svg"
        alt=""
        width={180}
        height={37}
        priority
      />
    </>
  );
}
