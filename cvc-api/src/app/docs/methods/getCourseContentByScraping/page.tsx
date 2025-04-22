import VariableProperty from "@/components/ui/variableProperty";
export default function GetCourseContentByScraping(){
    return (
        <>
    <div className="items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="w-full flex flex-col  row-start-2 items-center sm:items-start">
        <span className="text-white font-bold text-4xl mb-2">
        getCourseContentByScraping
        </span>
        <span className="text-gray-400 mb-8 ">
        Using the provided college name, searches for all the CVC IDs of the classes in the college which would be returned in a query with the above parameters. Returns a list of each of their corresponding course objects. This method uses Selenium to perform the search query.        
        </span>
        <span className="text-white mb-8">
          Parameters:
        </span>
        <ol className="w-120">
          <li>
            <VariableProperty name='collegeName' type='string' description="Name of the college whose classes you will search."></VariableProperty>
          </li>
          <li>
            <VariableProperty name='C_ID' type='string' description="The C-ID of the class you want to find."></VariableProperty>
          </li>
          <li>
            <VariableProperty name='courseSymbol' type='string' description="The course symbol of the class you want to find."></VariableProperty>
          </li>
          <li>
            <VariableProperty name='courseName' type='string' description="The name of the course you want to find."></VariableProperty>
          </li>
        </ol>
        <span className="text-white mb-8">
          Returns:
        </span>
        <ol>
          <li>
            <VariableProperty name='output' type='list[course]' description="A list of course objects."></VariableProperty>
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