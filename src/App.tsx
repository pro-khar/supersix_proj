import { ModeToggle } from "./components/mode-toggle";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import Papa from "papaparse";
import { useState } from "react";
import { useEffect } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Progress } from "@/components/ui/progress";

import { ScrollArea } from "./components/ui/scroll-area";
import { Label } from "./components/ui/label";
import { FaGithub } from "react-icons/fa";

function App() {
  const rowsPerPage = 100;
  const [startindex, setStartindex] = useState(0);
  const [endindex, setEndindex] = useState(rowsPerPage);
  const [data, setdata] = useState([]);
  const [fileName, setFileName] = useState("");
  const [rowsPerPageInput, setRowsPerPageInput] = useState(rowsPerPage);
  const [progress, setprogress] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    const file = e.target.files[0];
    setFileName(file.name);
    setIsLoading(true);
    setprogress(0);

    const totalDuration = 1000;
    const progressInterval = 100;
    let elapsedTime = 0;

    const interval = setInterval(() => {
      elapsedTime += progressInterval;
      const progressValue = (elapsedTime / totalDuration) * 100;
      setprogress(progressValue);
    }, progressInterval);

    setTimeout(() => {
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          setdata(results.data);
          setIsLoading(false);
          clearInterval(interval);
        },
      });
    }, totalDuration);
  };
  useEffect(() => {
    setRowsPerPageInput(rowsPerPageInput);
    setStartindex(0);
    setEndindex(rowsPerPageInput);
  }, [rowsPerPageInput]);

  return (
    <>
      <div id="base" className="flex">
        <div className="absolute right-3 top-2">
          <ModeToggle />
        </div>
        <div className="absolute left-2 top-2">
          <Button className="text-md w-10">
            <a href="https://github.com/pro-khar" target="_blank">
              <FaGithub />
            </a>
          </Button>
        </div>

        <div
          id="background"
          className={`w-1/2 ${
            data.length ? "hidden" : "md:block xl:block 2xl:block"
          } hidden`}
        ></div>

        <div
          id="objects_container"
          className={`flex flex-col gap-4 h-full items-center w-full ${
            data.length ? null : "justify-center"
          } pt-5`}
        >
          <h1 className="font-semibold">
            {data.length ? fileName : "Upload/Drag a CSV file to continue"}
          </h1>

          <div className="flex w-[71%] gap-x-8 gap-y-3 justify-center flex-wrap 2xl:flex-nowrap md:flex-nowrap xl:flex-nowrap">
            <Input
              type="file"
              accept=".csv"
              className={`${data.length ? "w-[250px]" : "w-[250px]"} py-[5px]`}
              onChange={handleSubmit}
            />
            {data.length ? (
              <div className="flex">
                <Label className="w-[80px] pt-1">Rows per page:</Label>
                <Input
                  className="w-[80px]"
                  type="number"
                  value={rowsPerPageInput}
                  onChange={(e) => setRowsPerPageInput(Number(e.target.value))}
                />
              </div>
            ) : null}
            {data.length ? (
              <h1 className="w-[fit-content] px-3 border rounded-md text-center py-2 text-sm text-gray-500 dark:text-zinc-400">
                Showing {startindex + 1} to {endindex} of {data.length - 1}{" "}
                entries
              </h1>
            ) : null}
          </div>
          {isLoading ? (
            <Progress
              value={progress}
              className="w-[200px] md:w-[500px] xl:w-[500px]  2xl:w-[500px]"
            />
          ) : null}

          {data.length ? (
            <ScrollArea
              id="data-container"
              className="mt-2 w-[90%] md:w-[90%] h-[65%] md:h-[700px] xl:h-[700px] 2xl:h-[700px] rounded border dark:bg-zinc-900"
            >
              <Table className="text-xs md:text-sm xl:text-sm 2xl:text-sm">
                <TableHeader className="sticky">
                  <TableRow>
                    <TableHead className="text-center">#</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead className="text-center">Credit Score</TableHead>
                    <TableHead className="text-center">Credit Lines</TableHead>
                    <TableHead className="text-center">Phone Number</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.slice(startindex, endindex).map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="text-center">
                        {startindex + index + 1}
                      </TableCell>
                      <TableCell>{row.Email}</TableCell>
                      <TableCell>{row.Name}</TableCell>
                      <TableCell className="text-center">
                        {row.CreditScore}
                      </TableCell>
                      <TableCell className="text-center">
                        {row.CreditLines}
                      </TableCell>
                      <TableCell className="text-center">
                        {row.MaskedPhoneNumber}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          ) : null}
          {data.length ? (
            <div
              className="fixed bottom-4 md:bottom-10 xl:bottom-10 2xl:bottom-10"
              style={{ userSelect: "none" }}
            >
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      className={
                        startindex === 0
                          ? "pointer-events-none text-gray-200"
                          : undefined
                      }
                      onClick={() => {
                        setStartindex(startindex - rowsPerPage);
                        setEndindex(endindex - rowsPerPage);
                      }}
                    />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext
                      className={
                        endindex === data.length - 1
                          ? "pointer-events-none  text-gray-200"
                          : undefined
                      }
                      onClick={() => {
                        setStartindex(startindex + rowsPerPage);
                        setEndindex(endindex + rowsPerPage);
                      }}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default App;
