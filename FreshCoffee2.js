Slack = require('node-slackr');
slack = new Slack('team','token');

slack = new Slack('MSAPP','bZAfKho4onlnLDpObjVdEpfM',{
  channel: "#messagetest",
  username: "slack-bot", 
});

messages = {
    text: "Fresh Coffee is ready!",
    channel: "#messagetest",
    username: "coffe-pot",
    icon_url: "https://slack.com/img/icons/app-57.png"
}

slack.notify(messages)	;