---
layout: post
title: AirPlay + Touch Bar = Network Disaster
created: 2022-06-10
updated: 2022-07-21
---
{% include aside.html type="Update" content="I got a reply to my feedback last night! Some great people at Apple have resolved this in macOS 12.5 (out now!) and Ventura (beta 3). It appears that the DFRExtra process now only seeks while active (and stops doing so when dismissed), so it is no longer destroying network performance in the background.<br><br>Thanks to everyone who helped spread the word or worked on the fix – you're awesome! ヽ(* ^ ω ^)ﾉ" %}

Ever since about the time I upgraded my 2019 MacBook Pro to macOS Monterey in August of 2021 I had been unable to use [Parsec](https://parsec.app) properly. I constantly encountered dips in performance every other second, with lots of rubber banding and pretty much constant audio lag (akin to what happens if you open the Wi-Fi dropdown on your menu bar and it starts scanning for networks). I figured this was simply because I had hopped on the upgrade train early and the program simply didn’t support the new version of macOS yet, so I didn’t care too much other than taking the time to look through some support channels (to no avail).

What caused this? An AirPlay button on my Touch Bar.

### Troubleshooting hell
A while after thinking this was an issue with Parsec itself (despite no one mentioning it anywhere) I noticed that this also applied to other local streaming services, such as Valve’s Steam Play, and I instead excused it as some sort of new driver incompatibility. However, around New Years 2022 I ran some various network speed tests for unrelated reasons and noticed that I was consistently getting a speed of \~340/30, instead of the \~650/50 I was expecting. I ran the same test to the same server on my phone, and lo and behold, I saw the speeds I expected.

<div class="sbs-img">
	<div>
		<img src="/assets/airplay/speed-during.png" style="max-width: 100%" alt="Terminal displaying a network speed of 350 Mbps from a networkQuality test">
		<p><em>Something's not quite right</em></p>
	</div>
	<div>
		<img src="/assets/airplay/speed-without.png" style="max-width: 100%" alt="Terminal displaying a network speed of 600 Mbps from a networkQuality test">
		<p><em>It's supposed to look like this</em></p>
	</div>
</div>

I was fairly certain this was a software problem since I initially blamed the upgrade to macOS Monterey, so my first step was to start my Mac in safe mode. This changed nothing.

I started holding frequent conversations with [Saagar Jha](https://saagarjha.com/) on this matter in March as I documented my descent into madness. Saagar suggested several great things to try, and during my attempts to find the root cause I pinged my router, and the following was revealed:

<img class="solo-img" src="/assets/airplay/latency-terminal.png" alt="Terminal displaying an irregular ping pattern, often spiking from an average of 5 milliseconds to over 100">

I noticed that these strange rhytmic ping waves/spikes happened on both 2.4GHz and 5GHz networks, but not when tethering to my iPhone’s mobile data. This issue also presented itself on my university's network (hint, there are AirPlay devices available on both). I also discovered that this issue was not present on a new user account.

After hours of going through everything from running apps, Console logs, network tests via Instruments, launchctl processes, potential Bluetooth interference, to so-called “utun” devices, I decided to reinstall macOS (keeping my files intact). It didn’t do much of anything, unfortunately, as my Touch Bar preferences were saved (that's not generally a bad thing, it should preserve customisations!).

I eventually bit the bullet and just made a new user account, and set everything up again. It worked! (Every now and then it would still occasionally decide to lag for a minute or two, but that seems unrelated). A few days later, however, the issue was back and didn’t want to go away.

### The cause
After having desperately achieved seemingly nothing over **far too many** hours of troubleshooting and feeling out of reasonable options, I decided to bring up Activity Monitor and just randomly start killing processes. I was convinced something was running on my user account that wasn’t on a fresh one. After doing this for a while, I killed two AirPlay processes, one of which–the culprit–was ”AirPlay (DFRExtra)”.

<div>
	<video title="AirPlay (DFRExtra) in action" width="800" height="500" preload="metadata" controls>
		<source src="/assets/external/airplay-disaster.mp4" type="video/mp4">
	</video>
</div>

The network problems vanished in a matter of seconds, and Saagar informed me that DFR stands for “Device Function Row”, the Touch Bar. It hit me, I had placed an AirPlay button on my Touch Bar, and every time I signed in–safe mode or not–macOS launched this process and presumably started to actively and constantly look for displays on my network.

<img class="solo-img" src="/assets/airplay/tb-button.png" style="max-width: 170px" alt="Screenshot of the AirPlay button">

The problems do still occur while sharing displays via AirPlay, though they don't seem to be as bad, but that is more reasonable to me than a background task ruining your day.

### Conclusion
Placing an AirPlay button on your MacBook’s Touch Bar makes it presumably scan for available displays(?) in the background (constantly), and this network scanning completely and utterly destroys your Mac’s network performance. Killing the process “AirPlay (DFRExtra)” unclogs the pipe almost instantly.

I’ve filed a Feedback with Apple, FB10166122. Honestly though, it seems to me that it’s one of those problems that will probably be solved in due time when people upgrade their devices to new (non-Touch Bar) Apple Silicon machines. In the meantime, however, please don’t put this button on your Touch Bar unless the only thing you wish to (Air)Play with is your own sanity.

<img class="solo-img" src="/assets/airplay/tb-button-delete.png" style="max-width: 100%" alt="AirPlay button about to be removed from a Touch Bar">

Thank you for coming to my TED talk,<br>
Martin

{% include aside.html type="Applicable to" content="(at least) macOS Monterey 12.0-12.4, Ventura untested" %}
{% include aside.html type="Update" content="Resolved in macOS Monterey 12.5 and Ventura beta 3 (build 22A5295i)" %}
