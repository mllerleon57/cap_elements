using { sap.capire.incidents as my } from '../db/schema';

@path : '/incidents'
service IncidentsService @(requires: 'admin') { 
  @odata.draft.enabled
  entity Incidents as projection on my.Incidents;
  entity Customers as projection on my.Customers;
  entity Conversations as projection on my.Conversations;
  entity Urgency as projection on my.Urgency;
  entity Status as projection on my.Status;
}