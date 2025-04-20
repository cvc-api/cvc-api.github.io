// import {
//     Card,
//     CardContent,
//     CardHeader,
//     CardTitle,
//   } from "@/components/ui/card"
import VariableProperty from "@/components/ui/variableProperty";
import Env from "@/lib/env";
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
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <a href={Env.APP_URL} className="mb-16 sm:mb-16 text-md md:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-700"><span >
      {/* <strong className="text-md md:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-700"> */}
        California Virtual Campus API
        {/* </strong> */}
      </span></a>

      <main className="w-full flex flex-col  row-start-2 items-center sm:items-start">
        <span className="text-white font-bold text-4xl mb-2 mt-8">
            course
        </span>
        <span className="text-gray-400 mb-8 ">
          How you retrieve course data.
        </span>
        <span className="text-white mb-8">
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
        </ol>
        {/* 
        <a href={Env.APP_URL} className="mb-4 sm:mb-0 text-md md:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-700"><span >
        <strong className="text-md md:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-700"> 
        Classes:
        </strong>
      </span>
      </a>         
      */}
      {/* <ol className="w-full list-inside list-none text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)] space-y-2">
          <li>
            <ItemMethod name='course' description={`
(str)         cvc_id          <br>
(str)         college_name    <br>
(str)         class_name      <br>
(str)         class_symbol    <br>
(str)         C_ID            <br>
(str)         course_description <br>
(str)         location        <br>
(int)         units           <br>
(str)        unitType        <br>
(list)       prereqs         <br>
(list)       sections        <br>`}/>
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