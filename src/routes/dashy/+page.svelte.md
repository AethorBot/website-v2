---
padding: true
title: Dashy
desc: Dashy is a bot that exports data from your Discord server to make a dashboard out of it!
image: /Dashy.png
hidden: true
---

<script>
	import { DISCORD, DASHY_INVITE } from '../../consts';


</script>
<div class="flex justify-center">
	<img src="/Dashy.png" class="h-48 rounded-xl" />
</div>
<h2 class="text-lg text-center">
	Dashy is a bot that exports data from your Discord server to make a dashboard out of it!
</h2>
<a href={DASHY_INVITE} rel="external" target="_blank" class="no-underline flex justify-center">
<button class="btn btn-primary">
  Invite Dashy
</button>
</a>
<a href="https://dash.tricked.pro/public-dashboards/f335b724ed5447b6a8f1528ba2953e74" target="_blank" rel="external">
<div class="flex justify-center">
	<img src="https://api.ascella.host/v2/ascella/view/kHwbHtmf.png" class="w-[100rem]" />
</div>
</a>

---

## Faq

- #### [Q] What is Dashy?
- [A] Dashy is a bot that exports data from your discord server to make a dashboard out of it!

<br/>

- #### [Q] How do I use Dashy?
- [A] See [Getting started](#getting-started)

<br/>

- #### [Q] Where can i get a vps?
- [A] Heres a list of good [vps providers](https://gist.github.com/Tricked-dev/6fee7a1394f02405659902c98abdb784) i would recommend at least 2gb ram

<br/>

- #### [Q] No data is shown but i did everything correctly
- [A] Sometimes the datasource doesn't correctly get used in the dashboard in this case you need to edit every panel and select prometheus again.

<br/>

- #### [Q] Why is the suggestions panel is empty?
- [A] The suggestions panel is a integration with Aethor, to make that panel work you need to add Aethor to your server and enable its suggestions features.

<br/>

- #### [Q] Why does the bot require manage server permissions?
- [A] This is needed to get the amount of bots in the server.

<br/>

- #### [Q] How are active members determined?
- [A] Active members are people who send a message within the past 5-6 minutes

<br/>

- #### [Q] error: Are you trying to mount a directory onto a file?
- [A] You didn't create the prometheus.yml file and it error you need to remove the prometheus.yml directory and create the file

<br/>

- #### [Q] Is there a public preview
- [A] Yes [you can view it here][publicinstance]

<br/>

## Getting started

### Prerequisites

- A discord server
- A vps or a [Grafana cloud](https://grafana.com/products/cloud/) account
- docker & docker-compose
- prometheus and grafana (bare metal)
- basic sys admin knowledge

## Installation

Add Dashy to your discord server, And run /setup it should give a message similar to this

![https://api.ascella.host/v2/ascella/view/YXse7pEp.png](https://api.ascella.host/v2/ascella/view/YXse7pEp.png)

### Docker

Then create the grafana instance using [docker][https://docker.com] and follow the steps on this github page further [AethorBot/grafana-prometheus](https://github.com/AethorBot/grafana-prometheus).

### Bare metal / importing the dashboard manually

Create the prometheus.yml at `/etc/prometheus/prometheus.yml`.

Go to [localhost:300](https://localhost:300) / server ip / whatever you configured and make the default user (make sure to use a secure password).

Go to configuration and click on add datasources select prometheus and fill the following info in and click save and quit
![https://api.ascella.host/v2/ascella/view/LFMRBjQW.png](https://api.ascella.host/v2/ascella/view/LFMRBjQW.png)

Then go to the dashboard tabs ![https://api.ascella.host/v2/ascella/view/ICFBrts2.png](https://api.ascella.host/v2/ascella/view/ICFBrts2.png) and click on import the dashboard from [dashboard.json](https://github.com/AethorBot/grafana-prometheus/blob/master/dashboard.json)

![https://api.ascella.host/v2/ascella/view/LlFFBzj7.png](https://api.ascella.host/v2/ascella/view/LlFFBzj7.png)

And your done! The dashboard is imported and all data should be viewable, if you have any issues feel free to ask in the [Support discord]({DISCORD}).

[publicinstance]: https://dash.tricked.pro/public-dashboards/f335b724ed5447b6a8f1528ba2953e74
