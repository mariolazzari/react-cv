import type { Resume } from "../../types/Resume";
import { Empty } from "../Empty";
import { Info } from "../Info";
import { ResumeProps } from "./ResumeProps";

export function Resume({ resume }: ResumeProps) {
  if (!resume) {
    return <Empty />;
  }

  return (
    <div className="p-8 flex flex-col w-full h-full overflow-y-auto bg-slate-100">
      <Info info={resume.info} />
    </div>
  );
}
