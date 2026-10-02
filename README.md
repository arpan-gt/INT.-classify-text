- - Problem Statement
    Build a backend service that classifies input text into categories like Complaint, Query, Feedback, or Other using an AI model.
- - Requirements

1.  REST API with single POST endpoint.
2.  Takes a text string.
3.  Sends it to an AI model for classification.
4.  Returns category and confidence

- - Tech Stack Used ---> Node.js, Typescript, Express

1. API Example
   Endpoint
   POST /api/classify

---
examples : 
Request:
{
  "text": "These sweets are too good"
}
Response:
{
  {
  "message": "Text received",
  "text": "These sweets are too good",
  "classified_data": "Feedback\nConfidence: 0.99"
    }
}
----
Request:
{
    "text":"Washing machine is not working"
}

Response:
{
    "message": "Text received ",
    "text": "Washing machine is not working",
    "classified_data": "Complaint 1.0"
}



Local URL: -> note : check your port in .env of your folder you hvae to set it manually and use that in place of 5000 in url
http://localhost:5000/api/classify


* * Environment Setup steps
1. cd backend
2. npm install
3. create .env file inside the backend folder and place  all keys as per available in * .env.sample *
4. start server using npm run dev

--------

2. How AI Was Used
 - User sends text to /api/classify.
 - then routes -> controller -> service -> input text sends to gemini AI
 - gemini classifies the text.
 - then gemini sends the response to client as per the given instruction;
