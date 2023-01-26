import Image from 'next/image';
export default function Logo() {
  return (
    <>
      <Image src={'/Logo.png'} alt={'logo'} width={64} height={64} />
    </>
  );
}
