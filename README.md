# I WILL NO LONGER MAINTAIN THIS.

See [issue #35](https://github.com/DrLex0/ThingiverseIssues/issues/35).

I might still update the workaround scripts from time to time, although I avoid using the Thingiverse website altogether and I recommend the same to anyone else. The glory days of Thingiverse are over. It is now owned by people who don't care about maintaining a community of 3D printing enthusiasts at all. There are better sites now in that regard, like [the one from PrusaPrinters](https://www.prusaprinters.org/prints).


# Thingiverse Issue Observation Thingamajig

This is an **UNOFFICIAL** tracker for current issues on the [Thingiverse](https://www.thingiverse.com) website. **I am NOT affiliated with Thingiverse or Makerbot/Stratasys in any way.** I am just one of the many users who are annoyed by the lack of support and maintenance on the website. I am merely trying to better document what is wrong with the site. I cannot do anything to fix anything about the website, the only thing I can do is report issues here and hope someone at Thingiverse finds this and uses it to fix at least the most pressing issues.

Please remain friendly in issue comments or I will just take this down again. I don't want to be rewarded for this volunteer effort with the honour of becoming a punch bag for frustration towards Makerbot/Stratasys.


## Issue Ranking

Because GitHub doesn't have an obvious way to rank issues, I will list the (maximum) 20 most important issues here, ranked (in my opinion) from most to least pressing. This may not be entirely up-to-date, look at the [specific issues](https://github.com/DrLex0/ThingiverseIssues/issues) for the latest info.

For discussions on specific issues, go to the [issues section](https://github.com/DrLex0/ThingiverseIssues/issues). You can add new ones, but please refrain from adding issues for extremely trivial things or requests for fancy new features. It is obvious that Makerbot have few resources to fix even the worst issues, so swamping them with a long list of minor things won't help in any way.

If you have good evidence that one of these issues is fixed, please close its issue ticket after adding a comment to it with the evidence.

1. [Need more transparency regarding website status and future plans](https://github.com/DrLex0/ThingiverseIssues/issues/4)
2. [Thingiverse Stakeholders are not valuing the need for community participation in 3d Printer Market Growth](https://github.com/DrLex0/ThingiverseIssues/issues/29)
3. [Previews of STL files, Thingiview, or photos, are often broken](https://github.com/DrLex0/ThingiverseIssues/issues/28)
4. [ZIP files are not updated and contain wrong images](https://github.com/DrLex0/ThingiverseIssues/issues/25)
5. [Bad UI design of the Groups leads to double, triple, quadruple posts](https://github.com/DrLex0/ThingiverseIssues/issues/7)
6. [Aspect ratios and cropping of uploaded photos are a mess](https://github.com/DrLex0/ThingiverseIssues/issues/27)
7. ["Recently Made" section on front page no longer updated](https://github.com/DrLex0/ThingiverseIssues/issues/21)
8. [Large GIF files must be banned](https://github.com/DrLex0/ThingiverseIssues/issues/33)
9. [Some Things cannot be found](https://github.com/DrLex0/ThingiverseIssues/issues/22)
10. [Customizer is broken very often](https://github.com/DrLex0/ThingiverseIssues/issues/5)
11. [In (paginated) Groups/Forums, only the first page can be seen](https://github.com/DrLex0/ThingiverseIssues/issues/6)
12. [Download and view counts highly inaccurate](https://github.com/DrLex0/ThingiverseIssues/issues/19)
13. [Collections count is incorrectly set to Makes count, often making collections inaccessible](https://github.com/DrLex0/ThingiverseIssues/issues/9)
14. [ZIP file does not contain full Thing description](https://github.com/DrLex0/ThingiverseIssues/issues/13)
15. [Full screen view in gallery is useless](https://github.com/DrLex0/ThingiverseIssues/issues/10)
16. [Link to original photo in gallery is often unclickable](https://github.com/DrLex0/ThingiverseIssues/issues/11)
17. [Default license setting does nothing](https://github.com/DrLex0/ThingiverseIssues/issues/14)
18. [Website encourages ‘laundering’ of Thing licenses](https://github.com/DrLex0/ThingiverseIssues/issues/15)
19. [Shoddy anti-spam system in Groups and comments](https://github.com/DrLex0/ThingiverseIssues/issues/16)
20. [Models Posted by Some Users Never Appear in the Newest Listings](https://github.com/DrLex0/ThingiverseIssues/issues/18)


## Hints to Thingiverse users to reduce stress on the servers and improve usability

* When creating a new Thing, first **prepare all your text offline** in a text editor. Then copy-paste this into the new Thing page. If it fails, then you won’t have lost all your work, just can just try it again.
* When you remix a Thing, make sure to **set a correct license** because the site will not do this for you. The license of your Thing must not be less restrictive than the most restrictive license of any of its remix sources. For instance, a remix of two Things, one with an “Attribution - Non-Commercial - Share Alike” license and another with an “Attribution” license, must have an “Attribution - Non-Commercial - Share Alike” license.
* **Do not keep hitting the submit button in groups/forums.** If it doesn’t respond within a few seconds, just wait longer, or open the group in another tab to see if your message isn’t already there, before trying to send it again. If you do find multiple copies of your post, delete the duplicates, but it is better to avoid having to do this altogether because it spams everyone's dashboard notifications.
* Please **downscale** overly large photos before uploading them. Nobody is interested in zooming in on your photos to see how noisy the image sensor in your phone is because the manufacturer wanted to put a higher number of megapixels on the spec sheet. It is possible for visitors to view photos in their full resolution, although this requires jumping through some hoops. In practice, almost everyone will only see the gallery images, so it is most important to make those look right. Bigger photos only take longer to process and put more stress on the already overloaded servers. Gallery images are rescaled to fit within 628×472 pixels. Due to bugs recently introduced, your uploaded photos must have this same 4:3 aspect ratio or otherwise the gallery images will be deformed or cropped. I always upload my photos at exactly twice that size (1256×944), which is plenty in most cases. Rescaling a photo in Paint, OS X Preview, GIMP, or some online tool, is not rocket science. And please use **JPEG** for camera photos, not PNG! PNG is only efficient for computer-generated drawings with large areas in the exact same color. If an image file (not a 3D file of course) is much larger than 1 MB whatever the format, it is needlessly large.
* Upload at least one actual photo of your *printed* Thing and make it the first gallery image. Even when the server is choking or the STL preview generator is broken yet again, your Thing is then likely to at least have a visible thumbnail. Otherwise everybody will only see a gray rectangle with a cogwheel for hours, days, or even weeks. If you don’t have a 3D print to take a photo of, then in my opinion you shouldn’t even be uploading the model to the site. I tend to completely ignore Things that only have the default blue 3D model thumbnail.
* Do not try to use animated GIFs as gallery photos or profile pictures. They will seem to work initially, but once the servers have finally chewed on the ridiculously large file, it will have been converted to a static JPEG. During the time your GIF file survives, people will have downloaded way more data than they expect, and the servers will have been unnecessarily stressed ([issue #33](https://github.com/DrLex0/ThingiverseIssues/issues/33)). *GIF is not suitable for video, period.* Upload videos to YouTube, and put the link in the description to get a video in the gallery that always works and does not force people to pull in tens of megabytes of very poorly compressed video. The only vaguely acceptable use for an animated GIF, is as an image in a separate section of the Thing description. There it will not be converted and keep working. Still, anything larger than a few megabytes should be converted to a video file instead.


## Workarounds

In the `workaround-scripts` directory you may find TamperMonkey/GreaseMonkey UserScripts that work around certain issues. Use at your own risk. I have only tested these scripts (if any) with TamperMonkey in Chrome.

Scripts for other issues are welcome! You can send them through a pull request or any other means.


## A bit of background

The reason why I made this, is because even though it may not be obvious to new users, the Thingiverse website is in a rather sorry state. There are many issues with core functionality, like uploading new Things or Makes. In any other website of this caliber, it would be easy to report such issues to the maintainers and they would be fixed in a matter of days, at most weeks. Not so in Thingiverse: there is no real official communication channel. There is very little sign of life from whoever is responsible, heck, it isn't even clear who is responsible at all. Issues keep being present for months, sometimes even years. Most novice users are still brave enough to try to report issues in the group forums. From my more than 3 years of experience with the site however, it seems that nobody at Makerbot really reads those forums, especially not since the last few years after certain moderators had left the site. (Remember [glitchpudding](https://www.thingiverse.com/glitchpudding/about)? If you don't, then in my opinion you cannot know how much the site has degraded in the past few years.)

It seems the whole website now runs on its own like a runaway train, with only some minimal intervention when things get too obviously bad for too long. From what I have heard, Makerbot (or its parent company Stratasys), the company that owns and manages Thingiverse, does not consider it a profitable website. Of course it is hard to quantify how sales of 3D printers would be affected if this gigantic repository of free-to-download shared 3D models would disappear, but this lack of interest from their part is the main reason why the amount of maintenance assigned to the site is very minimal. Of course this results in very slow responses to issues on the website.

My impression of what is happening here, is the following. I suspect that during management meetings, Thingiverse is treated as some kind of appendix whose usefulness is heavily doubted because the paper pushers do not see concrete revenue figures from it. They don't really dare to axe it, so instead they have reduced its resource allocations to the bare minimum. Every few months, one or two random Makerbot employees seem to be picked to take a look at this site which they are probably unfamiliar with, and they get a budget of a fixed number of days (hours?) to work on fixing problems. They then try to hack some fixes or new features into the probably horrible codebase, and leave behind these hacks to spawn new issues to be ‘solved’ by the next randomly picked persons. This is only a guess of mine based on observations from the last 3 years, but I work for a company that makes a product that has a large web-based UI part, and I have some experience and education in recognizing bad development practices without even looking at the code.

In my opinion, Makerbot should either:
- try to get a little bit of visible revenue from the site, be it through a few ads on the main page, such that there is an actual budget for maintaining it. This could convince the paper-pushers to allocate more resources to it.
- or, gather a community of motivated volunteers who will maintain the site for free, or in return for some small reward like discounts on certain products. There are certainly some people out there who have both the motivation and the technical knowledge to fix the most obvious issues in the above list.


## Additional Reading

I have written [an extended rant about the state of Thingiverse at the end of 2019](https://blobblubblobblog.blogspot.com/2019/12/the-state-of-thingiverse-end-of-2019.html) on my blog.

Also interesting is [this blog post](https://xyzdims.com/2019/11/21/misc-formnext-2019-aka-just-too-much-for-one-day/) which contains a report of actual communication with someone responsible for the Thingiverse website. Unfortunately it mostly confirms my suspicions… For instance when I wrote above: “one or two random Makerbot employees seem to be picked to take a look at this site,” I was kind of hoping this would be an exaggeration, but apparently it isn't.
