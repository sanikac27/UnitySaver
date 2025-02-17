import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Calendar, MessageSquare, FileText, Users, Plus} from 'lucide-react';
import '../../styles/components/GroupActivities.css';

const GroupActivities = () => {
  const [activities] = useState({
    meetings: [
      {
        id: 1,
        title: "Monthly Review Meeting",
        date: "2025-01-20",
        time: "10:00 AM",
        attendees: 12,
        status: "upcoming"
      },
      {
        id: 2,
        title: "Investment Strategy Discussion",
        date: "2025-01-25",
        time: "2:00 PM",
        attendees: 8,
        status: "scheduled"
      }
    ],
    discussions: [
      {
        id: 1,
        topic: "New Investment Opportunity",
        author: "Priya Singh",
        replies: 15,
        lastActive: "2 hours ago"
      },
      {
        id: 2,
        topic: "Monthly Contribution Changes",
        author: "Rahul Sharma",
        replies: 8,
        lastActive: "5 hours ago"
      }
    ],
    documents: [
      {
        id: 1,
        name: "Q4 2024 Financial Report",
        uploadedBy: "Admin",
        date: "2025-01-15",
        type: "PDF"
      },
      {
        id: 2,
        name: "Investment Guidelines 2025",
        uploadedBy: "Admin",
        date: "2025-01-10",
        type: "DOC"
      }
    ]
  });

  return (
    <div className="activities-container">
      {/* Quick Actions */}
      <div className="quick-actions-grid">
        <Card className="action-card">
          <CardContent className="action-content">
            <Calendar className="action-icon" />
            <div>
              <h3 className="action-title">Schedule Meeting</h3>
              <p className="action-description">Plan a new group meeting</p>
            </div>
          </CardContent>
        </Card>

        <Card className="action-card">
          <CardContent className="action-content">
            <MessageSquare className="action-icon" />
            <div>
              <h3 className="action-title">New Discussion</h3>
              <p className="action-description">Start a group discussion</p>
            </div>
          </CardContent>
        </Card>

        <Card className="action-card">
          <CardContent className="action-content">
            <FileText className="action-icon" />
            <div>
              <h3 className="action-title">Upload Document</h3>
              <p className="action-description">Share files with group</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Meetings */}
      <Card className="section-card">
        <CardHeader className="section-header">
          <CardTitle className="section-title">Upcoming Meetings</CardTitle>
          <Plus className="add-icon" />
        </CardHeader>
        <CardContent>
          <div className="content-grid">
            {activities.meetings.map(meeting => (
              <div key={meeting.id} className="item-card">
                <div className="item-header">
                  <div>
                    <h3 className="item-title">{meeting.title}</h3>
                    <p className="item-subtitle">
                      {meeting.date} at {meeting.time}
                    </p>
                  </div>
                  <span className="status-badge">
                    {meeting.status}
                  </span>
                </div>
                <div className="item-footer">
                  <Users className="small-icon" />
                  <span>{meeting.attendees} attendees</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Discussions */}
      <Card className="section-card">
        <CardHeader className="section-header">
          <CardTitle className="section-title">Recent Discussions</CardTitle>
          <Plus className="add-icon" />
        </CardHeader>
        <CardContent>
          <div className="content-grid">
            {activities.discussions.map(discussion => (
              <div key={discussion.id} className="item-card">
                <div className="item-header">
                  <div>
                    <h3 className="item-title">{discussion.topic}</h3>
                    <p className="item-subtitle">Started by {discussion.author}</p>
                  </div>
                  <span className="last-active">{discussion.lastActive}</span>
                </div>
                <div className="item-footer">
                  <MessageSquare className="small-icon" />
                  <span>{discussion.replies} replies</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Shared Documents */}
      <Card className="section-card">
        <CardHeader className="section-header">
          <CardTitle className="section-title">Shared Documents</CardTitle>
          <Plus className="add-icon" />
        </CardHeader>
        <CardContent>
          <div className="content-grid">
            {activities.documents.map(document => (
              <div key={document.id} className="document-card">
                <div className="document-info">
                  <FileText className="document-icon" />
                  <div>
                    <h3 className="document-title">{document.name}</h3>
                    <p className="document-subtitle">
                      Uploaded by {document.uploadedBy} • {document.date}
                    </p>
                  </div>
                </div>
                <button className="download-button">
                  Download
                </button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GroupActivities;