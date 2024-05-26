import { ModeToggle } from "./components/mode-toggle";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

function App() {
  const handleSubmit = () => {};
  return (
    <>
      <div id="base" className="">
        <div className="absolute right-2 top-2">
          <ModeToggle />
        </div>
        <div className="flex flex-col gap-4 h-full items-center justify-center">
          <h1 className="scroll-m-20 border-b pb-2 text-2xl md:text-3xl xl:text-3xl 2xl:text-3xl font-semibold tracking-tight first:mt-0">
            Upload a CSV file to continue
          </h1>
          <form className="flex w-[70%] md:w-1/3 xl:w-1/3 2xl:w-1/3 gap-2" onSubmit={handleSubmit}>
            <Input type="file" accept=".csv" className="" />
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
