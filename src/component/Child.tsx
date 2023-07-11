import { sleep } from "../helper";
import useSWR from "swr";

function Child(): JSX.Element {
  // eslint-disable-next-line no-debugger
  debugger;
  const { data } = useSWR("child", sleep<string>, { suspense: true });

  return <div>{data}</div>;
}

export { Child };
