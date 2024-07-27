import { InfoProps } from "./InfoProps";

export function Info({ info }: InfoProps) {
  return (
    <div className="">
      <div className="flex flex-col items-center gap-2">
        <img
          className="rounded-full"
          src={info.image}
          alt={info.name}
          width={100}
        />

        <img src="/vite.svg" alt="test" />
        <h1 className="text-4xl">{info.name}</h1>
        <h2 className="text-2xl text-slate-600">{info.label}</h2>
      </div>
    </div>
  );
}
