import { sleep, use } from "../helper";

const action: () => Promise<{ greeting: string }> = async () => {
  await sleep(2000);
  return { greeting: "hello world" };
};

function Component() {
  const data = use(action);

  return <div>The Greeting is - {data.greeting}</div>;
}
export { Component };
