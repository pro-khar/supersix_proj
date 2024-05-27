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
      <div id="base" className="">
        <div className="absolute right-2 top-2">
          <ModeToggle />
        </div>
        <div
          className={`flex flex-col gap-4 h-full items-center ${
            data.length ? null : "justify-center"
          } pt-5`}
        >
          <h1 className="scroll-m-20 border-b pb-2 text-2xl md:text-3xl xl:text-3xl 2xl:text-3xl font-semibold tracking-tight first:mt-0">
            {data.length ? fileName : "Upload a CSV file to continue"}
          </h1>
          <div className="flex w-[71%] gap-8 justify-center">
            <Input
              type="file"
              accept=".csv"
              className="w-[500px] py-[5px]"
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
              <h1 className="w-full border rounded-md text-center pt-1">
                Showing {startindex + 1} to {endindex} of {data.length - 1}{" "}
                entries
              </h1>
            ) : null}
          </div>
          {isLoading ? (
            <Progress value={progress} className="w-[500px]" />
          ) : null}

          {data.length ? (
            <ScrollArea
              id="data-container"
              className="mt-2 md:w-[90%] h-[73%] md:h-[700px] xl:h-[700px] 2xl:h-[700px] rounded border"
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
