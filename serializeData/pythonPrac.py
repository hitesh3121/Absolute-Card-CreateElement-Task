import json
 
class NewData:
    def __init__(self, data):
        self.data = data
        
    def seconFun(self, knowledge, skills):
        self.knowledge = knowledge
        self.skills = skills
        jsonData = json.dumps(self.data)
        print("DDD", jsonData)
        self.data = jsonData
        self.knowledge = jsonData["knowledge"]
        self.skills = jsonData["skills"]
        print("kno", self.knowledge)
        print("skills", self.skills)
        
        
newData1 = 'a:3:{s:9:"knowledge";a:1:{i:0;s:3:"4.1";}s:6:"skills";a:4:{i:0;s:3:"1.1";i:1;s:3:"3.3";i:2;s:3:"4.1";i:3;s:3:"5.1";}s:9:"behaviour";N;}'
p1 = NewData(newData1)
p1.seconFun()
json_data = json.dumps(p1.__dict__)

# print(json_data)