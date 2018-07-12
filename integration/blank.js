describe('create program', function () {
    describe('SubTask5', function() {
        it( "should have a new program button.", () => {
         cy.visit("https://omnichannel-campaign-creator.sandbox-sngl.com/#/programs?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2VudElkIjoiYWMxZGExNmItNjM3MS00ZTE4LWIxMWUtYTUxYzgwZTFhZGNlIiwiY2xpZW50SWQiOi0zLCJjbHVzdGVyIjoiYmVkZXYiLCJ1c2VyR3JvdXBzIjoiW1wiQWdlbnRzXCIsXCJBZG1pbmlzdHJhdG9yc1wiLFwiQW5hbHl0aWNzIFVzZXJzXCIsXCJDaGF0IERldmVsb3BlcnNcIixcIkNsaWVudHNcIixcIkV4ZWN1dGl2ZXNcIixcIkF1ZGl0b3JzXCIsXCJRQVwiLFwiU2NyaXB0b3JzXCIsXCJTaW5nbGVDb21tXCIsXCJTdXBlcnZpc29yc1wiLFwiV0IgQWRtaW5cIixcIkFnZW50IFBlcmZvcm1hbmNlIEZlZWRiYWNrIFVzZXJzXCIsXCJDb21wbGlhbmNlIEV2ZW50IFVzZXJzXCIsXCJFeHRlcm5hbCBBdWRpdG9yc1wiLFwiT3ZlcnJpZGUgTWFuYWdlcnNcIl0iLCJleHAiOjE1MzE0NDAzNjcsImlzcyI6IlNpbmdsZUNvbW0gU1NPIiwiaWF0IjoxNTMxNDA0MzM3fQ.GJ_Cz4yp7zRNWJsg7V1kcpoZoalErtx6PROeb4D2amw")
         cy.get("li").contains("Programs").click()
              cy.get( "h4" ).contains( " New Program" ).click()
           })
         })
        })