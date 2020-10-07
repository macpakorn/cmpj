from fastapi import FastAPI
from pydantic import BaseModel
#from nameko.rpc import rpc
#from nameko.standalone.rpc import ClusterRpcProxy

class Student(BaseModel):
    firstname:str
    lastname:str
    email:str


app = FastAPI() # FlaskApp()
class Body(BaseModel):
    bit2int : str

@app.get("/")
def hello():
    return {"Hello": "World"}

@app.get("/b2s/{b}")
def bit2int(b):
    return {"bit2int": b}

@app.post("/b2s")
def b2s(body: Body):
    return {"body": body}


