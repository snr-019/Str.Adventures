import Nav from "../../components/Nav/Nav.jsx";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import PageContent from "../../components/PageComponent/PageContent.js";

const DestinationV2 = () => {

  const { url } = useParams();
  const [ currentPageContent, setCurrentPageContent ] = useState(undefined)

  useEffect( () => {
    const data = PageContent.find( f => f.url == url)
    setCurrentPageContent(data)
  }, [ url ])

  if (!currentPageContent) return <h1>Page not found</h1>

    return (
      <div>
        <Nav />
        <div className="first_div">
          <div className="second_div">
            <h1>{ currentPageContent.title }</h1> 
            <p>{ currentPageContent.description }</p> 
          </div>
        </div>
      </div>
    )
}

export default DestinationV2
