# Thingiverse Issue Observation Thingamajig

This is an **UNOFFICIAL** tracker for current issues on the [Thingiverse](https://www.thingiverse.com) website. **I am NOT affiliated with Thingiverse or Makerbot in any way.** I am just one of the many users who are annoyed by the lack of support and maintenance on the website. I am merely trying to better document what is wrong with the site. I cannot do anything to fix anything about the website, the only thing I can do is report issues here and hope someone at Thingiverse finds this and uses it to fix at least the most pressing issues.


## A bit of background

From what I have heard, Makerbot, the company that owns and manages Thingiverse, does not consider it a profitable website. Of course it is hard to quantify how sales of 3D printers would be affected if this gigantic repository of free-to-download shared 3D models would disappear, but this is the main reason why the amount of maintenance assigned to the site is very minimal. Of course this results in very slow responses to issues on the website.

My impression of what is happening here, is the following: every few months, one or two random Makerbot employees are picked to take a look at this site which they are probably unfamiliar with, and they get a budget of a fixed number of days (hours?) to work on the site. They try to hack some fixes or new features into the probably horrible codebase, and then leave these hacks to spawn new issues to be ‘solved’ by the next randomly picked persons. This is only a guess of mine, but I work for a company that makes a product that has a large web-based UI part, and I have some experience and education in recognizing bad development practices without even looking at the code.

In my opinion, Makerbot should somehow try to get a little bit of visible revenue from the site, be it through a few ads on the main page, such that there is an actual budget for maintaining it.


## Issue Ranking

Because GitHub doesn't seem to have a way to rank issues, I will list the most important issues here, ranked (in my opinion) from most to least pressing. This may not be entirely up-to-date, look at the specific issues for the latest info.

For discussions on specific issues, go to the [issues section](https://github.com/DrLex0/ThingiverseIssues/issues). You can add new ones, but please refrain from adding issues for extremely trivial things or requests for fancy new features. It is obvious that they have few resources to fix even the worst issues, so swamping them with a long list of minor things won't help in any way.

1. Gallery images take hours or days to be generated.
2. Slow and unreliable website: 500, 503, 504 errors.
3. Uploads often fail invisibly.
4. Need more transparency regarding website status.
5. Customizer is broken very often.
6. In Groups/Forums, only the first page can be seen.
7. Double, triple, quadruple posts in Groups.
8. Tip payouts are completely messed up.
9. Collections shown as zero even if Thing has collections.
10. Full screen view in gallery is useless.
11. Link to original photo in gallery is often unclickable.
12. Numbers instead of names in Thing ZIP file.
13. ZIP file does not contain full Thing description.
14. Default license setting does nothing. 
15. Website encourages ‘laundering’ of Thing licenses.
16. Shoddy anti-spam system in Groups and comments.
17. QR codes in attribution file rely on internal Google API.


## Hints to Thingiverse users to reduce stress on the servers and improve usability

* Do not keep hitting the submit button in groups/forums. If it doesn’t respond within a few seconds, just wait longer, or open the group in another tab to see if your message isn’t already there, before trying to send it again.
* Please **downscale** overly large photos before uploading them. Nobody is interested in zooming in on your photos to see how noisy the image sensor in your phone is because the manufacturer wanted to put a higher number of megapixels on the spec sheet. Even though it is possible for visitors to view photos in their full resolution, this requires jumping through all kinds of hoops. In practice, almost nobody will ever see your photos at full resolution. Bigger photos only take longer to process and put more stress on the already overloaded servers. Gallery images are rescaled to fit within 628×472 pixels. I always upload my photos at exactly twice that size (1256×944), which is plenty in most cases. Rescaling a photo in Paint, OS X Preview, GIMP, or some online tool, is not rocket science.
* Upload at least one actual photo of your *printed* Thing. Even when the server is choking, your Thing will then at least have a visible thumbnail. Otherwise everybody will only see a gray rectangle with a cogwheel for hours or even days. If you don’t have a 3D print to take a photo of, then in my opinion you shouldn’t even be uploading it to the site. I tend to completely ignore Things that only have the default blue 3D model thumbnail.
* Do not try to use animated GIFs as gallery photos. They will seem to work initially, but once the servers have finally chewed on the ridiculously large file, it will have been converted to a static JPEG. GIF is not suitable for video, period. Upload videos to YouTube, and put the link in the description to get a video in the gallery that always works and does not force people to pull in tens of megabytes of very poorly compressed video. If you badly want to use a GIF anyway, upload it as an image in a separate section of the Thing description, there it will not be converted and keep working.
* When creating a new Thing, first prepare all your text offline in a text editor. Then copy-paste this into the new Thing page. If it fails, then you won’t have lost all your work, just can just try it again.