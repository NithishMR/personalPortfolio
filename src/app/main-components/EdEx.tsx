import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Education from "./Education";
import Experience from "./Experience";

export default function EdEx() {
  return (
    <>
      <div className="w-[90%] mx-auto mt-14">
        <Tabs defaultValue="Experience" className="w-full">
          <TabsList className="w-[95%] ">
            <TabsTrigger value="Experience" className="w-full">
              Experience
            </TabsTrigger>
            <TabsTrigger value="Education" className="w-full">
              Education
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Experience">
            <Experience />
          </TabsContent>
          <TabsContent value="Education">
            <Education />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
