import React, { useState } from "react";
import "./feedback.css";

const survey = {
  health: [
    {
      question: 'Have you been treated ?',
      choises:['Yes', 'No'],
    },{
      question: 'Have you completely recoverd from the illness ?',
      choises:[ 'Yes', 'No' ],
    },{
      question: 'Do you have medicial checkups, either : Random or Periodic',
      choises: [ 'Yes', 'No', 'Periodical' ],
    }
  ],
  building: [
    {
      question: 'Is the construction complete ?',
      choises:['Yes', 'No'],
    },{
      question: 'What type of construction was it :',
      choises:['From the ground-up', 'Transformation'],
    },{
      question: 'How would you rate our service form 1 to 10',
      choises:[],
    },{
      question: 'Do you have any other comment, or suggestion',
      choises:[],
    }
  ],
  roads: [
    {
      question: 'Is the construction complete ?',
      choises:['Yes', 'No'],
    },{
      question: 'What type of construction was it :',
      choises:['From the ground-up', 'Transformation'],
    },{
      question: 'How would you rate our service form 1 to 10',
      choises:[],
    },{
      question: 'Do you have any other comment, or suggestion',
      choises:[],
    }
  ],
}

export default function FeedBack() {
  const [ results,setResults ] = useState({})
  const [ title,setTitle ] = useState()


  const handleSubmit = () => {
    console.log(results)
  }

  return (
    <section className="contacts feedback">
      <div className="content">
        <h2 >FeedBack Form</h2>
        <p>
          The Army is one of the three services comprising the RDF. It evolved
          The Reserve Force refers to a part-time military service of the
          Rwanda.
        </p>
      </div>
      <div className="container">
        <select className="selectBox" onChange={ev => setTitle(ev.target.value)}>
          <option selected unselectable defaultValue disabled>Select a field to which it's addressed</option>
          <option value="roads" >Roads</option>
          <option value="building" >Building</option>
          <option value="health" >Health</option>
          {/* <option value="house" >Housing</option> */}
        </select>
        {
          title && 
            React.Children.toArray(
              survey[title] && survey[title].map((one,index) => (
                <div className="question-wrapper">
                  <h4 className="question"> {index+1} &bull; {one.question} </h4>
                  {
                    one.choises[0] ?
                      React.Children.toArray(
                        one.choises.map(ans => (
                            <section 
                              className="answer-wrapper"
                              onClick={() => 
                                setResults(prev => ({ ...prev,[one.question]:ans }))
                              }
                            >
                              <input 
                                type="radio"
                                checked={ results[one.question] === ans }
                              />
                              <span className="answer">{ans}</span>
                            </section>
                          )
                        )
                      ):(
                        <div className="inputBox">
                          <input type="text" min={0} max={10} onChange={ev => setResults(prev => ({...prev,[one.question]:ev.target.value }))} />
                          { !results[one.question] ? <span>Enter Here</span> : ''}
                        </div>
                      )
                  }
                  {
                    one.choises[0] &&
                    <section className="answer-wrapper">
                      <div className="inputBox">
                        <input 
                          type="text" 
                          onChange={ev => 
                            setResults(prev => ({...prev,[one.question]:ev.target.value }))
                            } 
                          />
                        <span>Enter here, if any other</span>
                      </div>
                    </section>
                  }
                </div>
              ))
            )
        }
        { title && <button onClick={handleSubmit}>SUBMIT</button>}
      </div>
    </section>
  );
}
