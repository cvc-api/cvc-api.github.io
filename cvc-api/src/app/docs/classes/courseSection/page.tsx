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
            courseSection
        </span>
        <span className="text-gray-400 mb-8 ">
          How you retrieve section data for a course.
        </span>
        <span className="text-white mb-8">
          Properties:
        </span>
        <ol className="w-120">
          <li>
            <VariableProperty name='duration' type='string' description="Duration of the section."></VariableProperty>
          </li>
          <li>
            <VariableProperty name='section' type='string' description="Name of the section."></VariableProperty>
          </li>
          <li>
            <VariableProperty name='format' type='string' description="Whether it is in person, asynchronous, synchronous, etc."></VariableProperty>
          </li>
          <li>
            <VariableProperty name='zeroTextbookCost' type='boolean' description="Whether or not this section has a zero textbook cost."></VariableProperty>
          </li>
          <li>
            <VariableProperty name='time' type='list[string]' description="The specified times/days the class is in session."></VariableProperty>
          </li>
          <li>
            <VariableProperty name='prof' type='string' description="The name of the professor assigned to the section."></VariableProperty>
          </li>
          <li>
            <VariableProperty name='currSeatCount' type='int' description="The current number of seats available for the section."></VariableProperty>
          </li>
          <li>
            <VariableProperty name='tuition' type='int' description="The total cost of tuition for the cost."></VariableProperty>
          </li>
          <li>
            <VariableProperty name='sectionNote' type='string' description="The note assigned to the section."></VariableProperty>
          </li>
          <li>
            <VariableProperty name='semester' type='string' description="The semester this section is being offered."></VariableProperty>
          </li>
          <li>
            <VariableProperty name='registration' type='string' description="Returns the text with either the date registration opens for the section or if it has already started."></VariableProperty>
          </li>
        </ol>

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <div></div>
      </footer>
    </div>
        </>
    );
}