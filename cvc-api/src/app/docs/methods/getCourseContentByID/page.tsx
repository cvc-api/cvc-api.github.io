import VariableProperty from "@/components/ui/variableProperty";
export default function GetCourseContentByID(){
    return (
        <>
    <div className="items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="w-full flex flex-col  row-start-2 items-center sm:items-start">
        <span className="text-white font-bold text-4xl mb-2">
        getCourseContentByID
        </span>
        <span className="text-gray-400 mb-8 ">
        Using a provided course ID, returns a course object with info scraped from the CVC course webpage.
        </span>
        <span className="text-white mb-8">
          Parameters:
        </span>
        <ol className="w-120">
          <li>
            <VariableProperty name='id' type='int' description="The CVC ID of the desired course."></VariableProperty>
          </li>
        </ol>
        <span className="text-white mb-8">
          Raises:
        </span>
        <ol>
          <li>
            <VariableProperty name='ValueError' type='' description="Inputted ID is invalid."></VariableProperty>
          </li>
          </ol>
        <span className="text-white mb-8">
          Returns:
        </span>
        <ol>
          <li>
            <VariableProperty name='output' type='course' description="A course object filled with the desired course info."></VariableProperty>
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