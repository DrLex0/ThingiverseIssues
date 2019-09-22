# Thingiverse Issue Observation Thingamajig

This is an **UNOFFICIAL** tracker for current issues on the [Thingiverse](https://www.thingiverse.com) website. **I am NOT affiliated with Thingiverse or Makerbot/Stratasys in any way.** I am just one of the many users who are annoyed by the lack of support and maintenance on the website. I am merely trying to better document what is wrong with the site. I cannot do anything to fix anything about the website, the only thing I can do is report issues here and hope someone at Thingiverse finds this and uses it to fix at least the most pressing issues.

Please remain friendly in issue comments or I will just take this down again. I don't want to be rewarded for this volunteer effort with the honour of becoming a punch bag for frustration towards Makerbot/Stratasys.


## A bit of background

From what I have heard, Makerbot (or its parent company Stratasys), the company that owns and manages Thingiverse, does not consider it a profitable website. Of course it is hard to quantify how sales of 3D printers would be affected if this gigantic repository of free-to-download shared 3D models would disappear, but this lack of interest from their part is the main reason why the amount of maintenance assigned to the site is very minimal. Of course this results in very slow responses to issues on the website.

My impression of what is happening here, is the following. I suspect that during management meetings, Thingiverse is treated as some kind of appendix whose usefulness is heavily doubted because the paper pushers do not see concrete revenue figures from it. They don't really dare to axe it, so instead they have reduced its resource allocations to the bare minimum. Every few months, one or two random Makerbot employees are picked to take a look at this site which they are probably unfamiliar with, and they get a budget of a fixed number of days (hours?) to work on fixing problems. They then try to hack some fixes or new features into the probably horrible codebase, and leave behind these hacks to spawn new issues to be ‘solved’ by the next randomly picked persons. This is only a guess of mine based on observations from the last 3 years, but I work for a company that makes a product that has a large web-based UI part, and I have some experience and education in recognizing bad development practices without even looking at the code.

In my opinion, Makerbot should somehow try to get a little bit of visible revenue from the site, be it through a few ads on the main page, such that there is an actual budget for maintaining it. This could convince the paper-pushers to allocate more resources to it.


## Issue Ranking

Because GitHub doesn't have an obvious way to rank issues, I will list the 20 most important issues here, ranked (in my opinion) from most to least pressing. This may not be entirely up-to-date, look at the [specific issues](https://github.com/DrLex0/ThingiverseIssues/issues) for the latest info.

For discussions on specific issues, go to the [issues section](https://github.com/DrLex0/ThingiverseIssues/issues). You can add new ones, but please refrain from adding issues for extremely trivial things or requests for fancy new features. It is obvious that Makerbot have few resources to fix even the worst issues, so swamping them with a long list of minor things won't help in any way.

1. [Need more transparency regarding website status and future plans](https://github.com/DrLex0/ThingiverseIssues/issues/4)
2. [Gallery images unreliable, ZIP download files are missing](https://github.com/DrLex0/ThingiverseIssues/issues/1)
3. [Slow and unreliable website: 500, 503, 504 errors](https://github.com/DrLex0/ThingiverseIssues/issues/2)
4. [Double, triple, quadruple posts in Groups due to bad UI](https://github.com/DrLex0/ThingiverseIssues/issues/7)
5. ["Recently Made" section on front page no longer updated](https://github.com/DrLex0/ThingiverseIssues/issues/21)
6. [Uploads often fail invisibly](https://github.com/DrLex0/ThingiverseIssues/issues/3)
7. [Customizer is broken very often](https://github.com/DrLex0/ThingiverseIssues/issues/5)
8. [In (paginated) Groups/Forums, only the first page can be seen](https://github.com/DrLex0/ThingiverseIssues/issues/6)
9. [Tip payouts are completely messed up](https://github.com/DrLex0/ThingiverseIssues/issues/8)
10. [Collections shown as zero even if Thing has collections](https://github.com/DrLex0/ThingiverseIssues/issues/9)
11. [Downloads Counts Highly Inaccurate](https://github.com/DrLex0/ThingiverseIssues/issues/19)
12. [Full screen view in gallery is useless](https://github.com/DrLex0/ThingiverseIssues/issues/10)
13. [Link to original photo in gallery is often unclickable](https://github.com/DrLex0/ThingiverseIssues/issues/11)
14. [Numbers instead of names in Thing ZIP file](https://github.com/DrLex0/ThingiverseIssues/issues/12)
15. [ZIP file does not contain full Thing description](https://github.com/DrLex0/ThingiverseIssues/issues/13)
16. [Default license setting does nothing](https://github.com/DrLex0/ThingiverseIssues/issues/14). 
17. [Website encourages ‘laundering’ of Thing licenses](https://github.com/DrLex0/ThingiverseIssues/issues/15)
18. [Models Posted by Some Users Never Appear in the Newest Listings](https://github.com/DrLex0/ThingiverseIssues/issues/18)
19. [Shoddy anti-spam system in Groups and comments](https://github.com/DrLex0/ThingiverseIssues/issues/16)
20. [QR codes in attribution file rely on internal Google API](https://github.com/DrLex0/ThingiverseIssues/issues/17)


## Hints to Thingiverse users to reduce stress on the servers and improve usability

* Do not keep hitting the submit button in groups/forums. If it doesn’t respond within a few seconds, just wait longer, or open the group in another tab to see if your message isn’t already there, before trying to send it again. If you do find multiple copies of your post, delete the duplicates.
* Please **downscale** overly large photos before uploading them. Nobody is interested in zooming in on your photos to see how noisy the image sensor in your phone is because the manufacturer wanted to put a higher number of megapixels on the spec sheet. Even though it is possible for visitors to view photos in their full resolution, this requires jumping through all kinds of hoops. In practice, almost nobody will ever see your photos at full resolution. Bigger photos only take longer to process and put more stress on the already overloaded servers. Gallery images are rescaled to fit within 628×472 pixels. I always upload my photos at exactly twice that size (1256×944), which is plenty in most cases. Rescaling a photo in Paint, OS X Preview, GIMP, or some online tool, is not rocket science.
* Upload at least one actual photo of your *printed* Thing. Even when the server is choking, your Thing will then at least have a visible thumbnail. Otherwise everybody will only see a gray rectangle with a cogwheel for hours or even days. If you don’t have a 3D print to take a photo of, then in my opinion you shouldn’t even be uploading it to the site. I tend to completely ignore Things that only have the default blue 3D model thumbnail.
* Do not try to use animated GIFs as gallery photos. They will seem to work initially, but once the servers have finally chewed on the ridiculously large file, it will have been converted to a static JPEG. GIF is not suitable for video, period. Upload videos to YouTube, and put the link in the description to get a video in the gallery that always works and does not force people to pull in tens of megabytes of very poorly compressed video. If you badly want to use a GIF anyway, upload it as an image in a separate section of the Thing description, there it will not be converted and keep working.
* When creating a new Thing, first prepare all your text offline in a text editor. Then copy-paste this into the new Thing page. If it fails, then you won’t have lost all your work, just can just try it again.
* When you remix a Thing, make sure to set a correct license because the site will not do this for you. The license of the new Thing must not be less restrictive than the most restrictive license of any of the remix sources. For instance, a remix of two Things, one with an “Attribution - Non-Commercial - Share Alike” license and another with an “Attribution” license, must have an “Attribution - Non-Commercial - Share Alike” license.

