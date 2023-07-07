sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'lmr/incidents/test/integration/FirstJourney',
		'lmr/incidents/test/integration/pages/IncidentsList',
		'lmr/incidents/test/integration/pages/IncidentsObjectPage',
		'lmr/incidents/test/integration/pages/ConversationsObjectPage'
    ],
    function(JourneyRunner, opaJourney, IncidentsList, IncidentsObjectPage, ConversationsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('lmr/incidents') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheIncidentsList: IncidentsList,
					onTheIncidentsObjectPage: IncidentsObjectPage,
					onTheConversationsObjectPage: ConversationsObjectPage
                }
            },
            opaJourney.run
        );
    }
);