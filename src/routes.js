import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import InvitationRecieved from './pages/InvitationRecieved';
import InviteMembers from './pages/InviteMembers';
import Mentors from './pages/Mentors';
import MyInvitations from './pages/MyInvitations';
import Member1 from './pages/InviteMembers/member1';
import Member2 from './pages/InviteMembers/member2';
import Member3 from './pages/InviteMembers/member3';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/mentors" component={Mentors} />
        <Route path="/invitemembers" component={InviteMembers} />
        <Route path="/myinvitations" component={MyInvitations} />
        <Route path="/invitationrecieved" component={InvitationRecieved} />
        <Route path="/member1" component={Member1} />
        <Route path="/member2" component={Member2} />
        <Route path="/member3" component={Member3} />
      </Switch>
    </BrowserRouter>
  );
}
