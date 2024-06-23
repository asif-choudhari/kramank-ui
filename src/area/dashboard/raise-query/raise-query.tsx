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
import { AppDispatch } from "@/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOpenQueriesThunk,
  postQueryThunk,
  setopenQueries,
} from "./state/rasie-query.slice";
import { tokenSelector } from "@/area/login/state/login.selector";
import { toast } from "sonner";
import Spinner from "@/area/common/spinner";
import { openQueriesSelector } from "./state/raise-query.selector";
import { Input } from "@/components/ui/input";
import { QueryType } from "./rasie-query.types";

function RaiseQuery() {
  const dispatch = useDispatch<AppDispatch>();

  const [selectedType, setSelectedType] = useState<string>("1");
  const [titleText, setTitleText] = useState<string>("");
  const [descriptionText, setDescriptionText] = useState<string>("");
  const [isOpenQuriesApiLoading, setIsOpenQuriesApiLoading] =
    useState<boolean>(false);

  const token = useSelector(tokenSelector);
  const openQueries = useSelector(openQueriesSelector);

  useEffect(() => {
    const getOpenQueries = async () => {
      setIsOpenQuriesApiLoading(true);
      await dispatch(getOpenQueriesThunk({ token, companyId: 1 }))
        .then((response) => {
          response.type.includes("rejected")
            ? toast.error("Could not fetch Open Queries")
            : dispatch(setopenQueries(response.payload));
        })
        .finally(() => {
          setIsOpenQuriesApiLoading(false);
        });
    };

    getOpenQueries();
  }, [dispatch, token]);

  const handleQuerySubmit = async () => {
    let validData = true;
    if (titleText.length == 0) {
      toast.error("Please enter a title.");
      validData = false;
    }
    if (descriptionText.length == 0) {
      toast.error("Please enter description.");
      validData = false;
    }

    if (validData) {
      const query: QueryType = {
        type: Number(selectedType),
        title: titleText,
        description: descriptionText,
        status: "O",
      };
      await dispatch(postQueryThunk({ token, companyId: 1, query }))
        .then((response) => {
          response.type.includes("rejected")
            ? toast.error("Error Occured while submitting your query")
            : toast.success("Query submitted successfully");
        })
        .finally(() => {
          dispatch(getOpenQueriesThunk({ token, companyId: 1 }))
            .then((response) => {
              response.type.includes("rejected")
                ? toast.error("Could not fetch Open Queries")
                : dispatch(setopenQueries(response.payload));
            })
            .finally(() => {
              setIsOpenQuriesApiLoading(false);
            });
        });
    }
  };

  return (
    <>
      <div className="h-full pr-1 pb-4 pl-4 grid gap-4 grid-cols-1 lg:grid-cols-2 lg:grid-rows-6 overflow-y-auto">
        <div className="w-auto h-full p-5 shadow-all-sides rounded-xl flex flex-col items-center bg-white lg:col-start-1 lg:row-start-1 lg:row-end-7">
          <div className="w-full h-10 font-bold text-xl">
            <span>Raise Query</span>
          </div>
          <div className="w-full h-full my-4">
            <span>Query Type:</span>
            <div className="py-2">
              <Select
                defaultValue={selectedType}
                onValueChange={setSelectedType}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Raise issue</SelectItem>
                  <SelectItem value="2">Request new product</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="py-2">
              <Input
                type="text"
                placeholder="A short title for your query."
                value={titleText}
                onChange={(evet: React.ChangeEvent<HTMLInputElement>) => {
                  setTitleText(evet.target.value);
                }}
              />
            </div>
            <div>
              <Textarea
                placeholder="Type your message here."
                value={descriptionText}
                onChange={(evet: React.ChangeEvent<HTMLTextAreaElement>) => {
                  setDescriptionText(evet.target.value);
                }}
                className="h-40 max-h-72"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Your message will be sent to the support team.
            </p>
            <Button onClick={handleQuerySubmit} className="w-full my-5">
              Submit
            </Button>
          </div>
        </div>
        <div className="w-auto p-5 shadow-all-sides rounded-xl flex flex-col items-center bg-white lg:col-start-2 lg:row-start-1 lg:row-end-7">
          <div className="w-full h-10 font-bold text-xl">
            <span>Open Queries</span>
          </div>
          {isOpenQuriesApiLoading ? (
            <Spinner className="h-20 w-20 m-auto" />
          ) : (
            <Accordion type="single" collapsible className="w-full">
              {openQueries &&
                openQueries.map((query) => (
                  <AccordionItem value={query.queryId?.toString() || ""}>
                    <AccordionTrigger>{`#${query.queryId} - ${
                      query.type === 1 ? "Issue" : "Request"
                    } -  ${query.title}`}</AccordionTrigger>
                    <AccordionContent>{query.description}</AccordionContent>
                  </AccordionItem>
                ))}
            </Accordion>
          )}
        </div>
      </div>
    </>
  );
}

export default RaiseQuery;
