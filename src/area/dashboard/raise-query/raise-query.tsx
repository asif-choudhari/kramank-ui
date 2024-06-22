import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

function RaiseQuery() {
  const [selectedType, setSelectedType] = useState<string>("issue");

  return (
    <div className="h-full pr-1 pb-4 pl-4 grid gap-4 grid-cols-1 lg:grid-cols-2 lg:grid-rows-6 overflow-y-auto">
      <div className="w-auto h-full p-5 shadow-all-sides rounded-xl flex flex-col items-center bg-white lg:col-start-1 lg:row-start-1 lg:row-end-7">
        <div className="w-full h-10 font-bold text-xl">
          <span>Raise Query</span>
        </div>
        <div className="w-full h-full my-4">
          <span>Query Type:</span>
          <div className="py-2">
            <Select defaultValue={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="issue">Issue</SelectItem>
                <SelectItem value="type2">Type 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="">
            <Textarea
              placeholder="Type your message here."
              className="h-40 max-h-72"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Your message will be sent to the support team.
          </p>
          <Button className="w-full my-5">Submit</Button>
        </div>
      </div>
      <div className="w-auto p-5 shadow-all-sides rounded-xl flex flex-col items-center bg-white lg:col-start-2 lg:row-start-1 lg:row-end-7">
        <div className="w-full h-10 font-bold text-xl">
          <span>Open Queries</span>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>Yes.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default RaiseQuery;
