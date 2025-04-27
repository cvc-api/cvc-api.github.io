// import {
//     Card,
//     CardContent,
//     CardHeader,
//     CardTitle,
//   } from "@/components/ui/card"
import { CodeBlock } from "@/components/ui/CodeBlock";
// import VariableProperty from "@/components/ui/variableProperty";
  // const ItemMethod = ({name,description}:{name:string,description:string}) => {
  //   return(
  //     <Card>
  //       <CardHeader>
  //         <CardTitle>{name}</CardTitle>
  //       </CardHeader>
  //       <CardContent><div dangerouslySetInnerHTML={{__html:description}}></div></CardContent>
  //     </Card>
  //   )
  // }


export default function Docs(){
    return (
        <>
    <div className="items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">

      <main className="w-full flex flex-col  row-start-2 items-center sm:items-start">
        <span className="text-white font-bold text-4xl mb-2">
            Installation
        </span>
        <span className="text-gray-400 mb-2 ">
          Run the following command in your terminal.
        </span>
        <div className="mb-8">
        <CodeBlock />

        </div>
        {/* <span className="text-white mb-8">
          Properties:
        </span>
        <ol className="w-120">
          <li>
            <VariableProperty name='cvc_id' type='string' description="Course ID as assigned on the CVC platform."></VariableProperty>
          </li>
          <li>
            <VariableProperty name='college_name' type='string' description="Name of the college this course belongs to."></VariableProperty>
          </li>
          <li>
            <VariableProperty name='class_name' type='string' description="Name of the course."></VariableProperty>
          </li>
          <li>
            <VariableProperty name='class_symbol' type='string' description="Abbreviation of the course in its home institution, such as HIST101 or COMPSCI001."></VariableProperty>
          </li>
          <li>
            <VariableProperty name='C_ID' type='string' description="C-ID assigned to the course. You can find more info at https://www.c-id.net/courses"></VariableProperty>
          </li>
          <li>
            <VariableProperty name='course_description' type='string' description="Course description according to the CVC course page."></VariableProperty>
          </li>
          <li>
            <VariableProperty name='location' type='string' description="Location where the course is being offered."></VariableProperty>
          </li>
          <li>
            <VariableProperty name='units' type='int' description="Number of units this course has."></VariableProperty>
          </li>
          <li>
            <VariableProperty name='unitType' type='string' description="The type of units this course has."></VariableProperty>
          </li>
          <li>
            <VariableProperty name='prereqs' type='list[string]' description="A list of course symbols associated with this prerequisite."></VariableProperty>
          </li>
          <li>
            <VariableProperty name='sections' type='list[courseSection]' description="A list of courseSection objects with data of the currently displayed course sections on the CVC course page."></VariableProperty>
          </li>
        </ol> */}
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <div></div>
      </footer>
    </div>
        </>
    );
}