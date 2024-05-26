import { ModeToggle } from "./components/mode-toggle";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import Papa from "papaparse";
import { useState } from "react";
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

import { ScrollArea } from "./components/ui/scroll-area";

function App() {
  const rowsPerPage = 20;
  const [startindex, setStartindex] = useState(0);
  const [endindex, setEndindex] = useState(rowsPerPage);
  const [data, setdata] = useState([]);
  const [fileName, setFileName] = useState("");
  const handleSubmit = (e) => {
    console.log("Done!");
    const file = e.target.files[0];
    setFileName(file.name);
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        setdata(results.data);
      },
    });
  };

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
          <div
            className="flex w-[70%] md:w-1/3 xl:w-1/3 2xl:w-1/3 gap-2"
            onSubmit={handleSubmit}
          >
            <Input
              type="file"
              accept=".csv"
              className=""
              onChange={handleSubmit}
            />
            {/* <Button type="submit" >Submit</Button> */}
          </div>
          {data.length ? (
            <ScrollArea
              id="data-container"
              className="mt-2 md:w-[90%] h-[73%] md:h-[700px] xl:h-[700px] 2xl:h-[700px] rounded border"
            >
              <Table className="text-xs md:text-sm xl:text-sm 2xl:text-sm">
                <TableHeader>
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
                      <TableCell className="text-center">{index + 1}</TableCell>
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
            <div className="fixed bottom-4 md:bottom-10 xl:bottom-10 2xl:bottom-10">
              <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    className={
                      startindex === 0 ? "pointer-events-none" : undefined
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
                        ? "pointer-events-none"
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