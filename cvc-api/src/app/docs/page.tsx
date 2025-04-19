import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Env from "@/lib/env";
const ItemMethod = ({name,description}:{name:string,description:string}) => {
  return(
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent><div dangerouslySetInnerHTML={{__html:description}}></div></CardContent>
    </Card>
  )
}
    
export default function Docs(){
    return (
        <>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <a href={Env.APP_URL} className="mb-4 sm:mb-0"><span ><strong className="text-md md:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-700">California Virtual Campus API</strong></span></a>
      <main className="w-full flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

      <span className="sm:mb-1 mb-2"><strong className="text-md md:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500">Methods:</strong></span>
        <ol className="w-full list-inside list-none text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)] space-y-2">
          <li>
            <ItemMethod name='getCourseContentByID(id:int)' description={`Using a provided course ID, returns a course object with info scraped from the CVC course webpage.<br><br> <b>Parameters:</b><br> id (int): The CVC ID of the desired course<br><br> <b>Raises:</b><br> ValueError: Inputted ID, id, is invalid.<br><br> <b>Returns:</b><br> course: A course object filled with the desired course info.<br>`}/>
          </li>
          <li>
            <ItemMethod name='getCourseIDsBySearch(collegeName:str, C_ID:str, courseSymbol:str, courseName:str)' description={`Using the provided college name, <br> searches for all the CVC IDs of the classes in the college which would be returned in a query with the above parameters. <br> Returns a list of the found IDs. <br><br> <b>Parameters:</b><br> collegeName (str): Name of the college whose classes you will search. <br> C_ID (str): The C-ID of the class you want to find. <br> courseSymbol (str): The course symbol of the class you want to find. <br> courseName (str): The name of the course you want to find. <br><br> <b>Returns:</b><br> A list of CVC IDs. <br>`}/>
          </li>
          <li>
            <ItemMethod name='getCourseIDsByScraping(collegeName:str, C_ID:str, courseSymbol:str, courseName:str)' description={`Using the provided college name, <br> searches for all the CVC IDs of the classes in the college which would be returned in a query with the above parameters. <br> Returns a list of the found IDs. <br> This method uses Selenium to perform the search query. <br><br> <b>Parameters:</b><br> collegeName (str): Name of the college whose classes you will search. <br> C_ID (str): The C-ID of the class you want to find. <br> courseSymbol (str): The course symbol of the class you want to find. <br> courseName (str): The name of the course you want to find. <br><br> <b>Returns:</b><br> A list of CVC IDs. <br>`}/>
          </li>
          <li>
            <ItemMethod name='getCourseContentByScraping(collegeName:str, C_ID:str, courseSymbol:str, courseName:str)' description={`Using the provided college name, <br> searches for all the CVC IDs of the classes in the college which would be returned in a query with the above parameters. <br> Returns a list of each of their corresponding course objects. <br> This method uses Selenium to perform the search query. <br><br> <b>Parameters:</b> <br> collegeName (str): Name of the college whose classes you will search. <br> C_ID (str): The C-ID of the class you want to find. <br> courseSymbol (str): The course symbol of the class you want to find. <br> courseName (str): The name of the course you want to find. <br><br> <b>Returns:</b> <br> courses: A list of course objects. <br>`}/>
          </li>
        </ol>

      <span className="sm:mb-1 mb-2"><strong className="text-md md:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500">Classes:</strong></span>
        <ol className="w-full list-inside list-none text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)] space-y-2">
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
          <li>
            <ItemMethod name='courseSection' description={`
(str)         self.duration          <br>
(str)         self.section           <br>
(str)         self.format            <br>
(bool)       self.zeroTextbookCost  <br>
(list)       self.time              <br>
(str)         self.prof              <br>
(int)         self.currSeatCount     <br>
(int)         self.tuition           <br>
(str)         self.sectionNote       <br>
(str)         self.semester          <br>
(str)         self.registration      <br>`}/>
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