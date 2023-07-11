/* eslint-disable @typescript-eslint/no-unsafe-call */
import { sleep } from "../helper";
import useSWR from "swr";

function Child(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data } = useSWR("Child", sleep<string>, { suspense: true });

  return <div>{data}</div>;
}
2;
export { Child };
