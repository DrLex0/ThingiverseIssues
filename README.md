# Thingiverse Issue Observation Thingamajig

This is an **UNOFFICIAL** tracker for current issues on the [Thingiverse](https://www.thingiverse.com) website. **I am NOT affiliated with Thingiverse or Makerbot/Stratasys in any way.** I am just one of the many users who are annoyed by the lack of support and maintenance on the website. I am merely trying to better document what is wrong with the site. I cannot do anything to fix anything about the website, the only thing I can do is report issues here and hope someone at Thingiverse finds this and uses it to fix at least the most pressing issues.

Please remain friendly in issue comments or I will just take this down again. I don't want to be rewarded for this volunteer effort with the honour of becoming a punch bag for frustration towards Makerbot/Stratasys.


## Issue Ranking

Because GitHub doesn't have an obvious way to rank issues, I will list the 20 most important issues here, ranked (in my opinion) from most to least pressing. This may not be entirely up-to-date, look at the [specific issues](https://github.com/DrLex0/ThingiverseIssues/issues) for the latest info.

For discussions on specific issues, go to the [issues section](https://github.com/DrLex0/ThingiverseIssues/issues). You can add new ones, but please refrain from adding issues for extremely trivial things or requests for fancy new features. It is obvious that Makerbot have few resources to fix even the worst issues, so swamping them with a long list of minor things won't help in any way.

If you have good evidence that one of these issues is fixed, please add it to the issue ticket.

1. [Slow and unreliable website: 500, 503, 504 errors](https://github.com/DrLex0/ThingiverseIssues/issues/2)
2. [Need more transparency regarding website status and future plans](https://github.com/DrLex0/ThingiverseIssues/issues/4)
3. [ZIP files are not updated and contain wrong images](https://github.com/DrLex0/ThingiverseIssues/issues/25)
4. [Bad UI design of the Groups leads to double, triple, quadruple posts](https://github.com/DrLex0/ThingiverseIssues/issues/7)
5. [Aspect ratios and cropping of uploaded photos are a mess](https://github.com/DrLex0/ThingiverseIssues/issues/27)
6. ["Recently Made" section on front page no longer updated](https://github.com/DrLex0/ThingiverseIssues/issues/21)
7. [Uploads often fail invisibly](https://github.com/DrLex0/ThingiverseIssues/issues/3)
8. [Customizer is broken very often](https://github.com/DrLex0/ThingiverseIssues/issues/5)
9. [In (paginated) Groups/Forums, only the first page can be seen](https://github.com/DrLex0/ThingiverseIssues/issues/6)
10. [Download and view counts highly inaccurate](https://github.com/DrLex0/ThingiverseIssues/issues/19)
11. [Collections shown as zero even if Thing has collections](https://github.com/DrLex0/ThingiverseIssues/issues/9)
12. [Full screen view in gallery is useless](https://github.com/DrLex0/ThingiverseIssues/issues/10)
13. [Link to original photo in gallery is often unclickable](https://github.com/DrLex0/ThingiverseIssues/issues/11)
14. [ZIP file does not contain full Thing description](https://github.com/DrLex0/ThingiverseIssues/issues/13)
15. [Default license setting does nothing](https://github.com/DrLex0/ThingiverseIssues/issues/14)
16. [Website encourages ‘laundering’ of Thing licenses](https://github.com/DrLex0/ThingiverseIssues/issues/15)
17. [Shoddy anti-spam system in Groups and comments](https://github.com/DrLex0/ThingiverseIssues/issues/16)
18. [Search often fails but without error](https://github.com/DrLex0/ThingiverseIssues/issues/23)
19. [Logging in causes logout on other devices](https://github.com/DrLex0/ThingiverseIssues/issues/24)
20. [Some Things cannot be found](https://github.com/DrLex0/ThingiverseIssues/issues/22)


## Hints to Thingiverse users to reduce stress on the servers and improve usability

* **Do not keep hitting the submit button in groups/forums.** If it doesn’t respond within a few seconds, just wait longer, or open the group in another tab to see if your message isn’t already there, before trying to send it again. If you do find multiple copies of your post, delete the duplicates, but it is better to avoid having to do this altogether because it spams everyone's dashboard notifications.
* Please **downscale** overly large photos before uploading them. Nobody is interested in zooming in on your photos to see how noisy the image sensor in your phone is because the manufacturer wanted to put a higher number of megapixels on the spec sheet. It is possible for visitors to view photos in their full resolution, although this requires jumping through some hoops. In practice, almost everyone will only see the gallery images, so it is most important to make those look right. Bigger photos only take longer to process and put more stress on the already overloaded servers. Gallery images are rescaled to fit within 628×472 pixels. Due to bugs recently introduced, your uploaded photos must have this same 4:3 aspect ratio or otherwise the gallery images will be deformed or cropped. I always upload my photos at exactly twice that size (1256×944), which is plenty in most cases. Rescaling a photo in Paint, OS X Preview, GIMP, or some online tool, is not rocket science.
* Upload at least one actual photo of your *printed* Thing. Even when the server is choking, your Thing is then likely to at least have a visible thumbnail. Otherwise everybody will only see a gray rectangle with a cogwheel for hours or even days. If you don’t have a 3D print to take a photo of, then in my opinion you shouldn’t even be uploading it to the site. I tend to completely ignore Things that only have the default blue 3D model thumbnail.
* Do not try to use animated GIFs as gallery photos. They will seem to work initially, but once the servers have finally chewed on the ridiculously large file, it will have been converted to a static JPEG. GIF is not suitable for video, period. Upload videos to YouTube, and put the link in the description to get a video in the gallery that always works and does not force people to pull in tens of megabytes of very poorly compressed video. If you badly want to use a GIF anyway, upload it as an image in a separate section of the Thing description, there it will not be converted and keep working.
* When creating a new Thing, first prepare all your text offline in a text editor. Then copy-paste this into the new Thing page. If it fails, then you won’t have lost all your work, just can just try it again.
* When you remix a Thing, make sure to set a correct license because the site will not do this for you. The license of the new Thing must not be less restrictive than the most restrictive license of any of the remix sources. For instance, a remix of two Things, one with an “Attribution - Non-Commercial - Share Alike” license and another with an “Attribution” license, must have an “Attribution - Non-Commercial - Share Alike” license.


## A bit of background

The reason why I made this, is because even though it may not be obvious to new users, the Thingiverse website is in a rather sorry state. There are many issues with core functionality, like uploading new Things or Makes. In any other website of this caliber, it would be easy to report such issues to the maintainers and they would be fixed in a matter of days, at most weeks. Not so in Thingiverse: there is no real official communication channel. There is very little sign of life from whoever is responsible, heck, it isn't even clear who is responsible at all. Issues keep being present for months, sometimes even years. Most novice users are still brave enough to try to report issues in the group forums. From my more than 3 years of experience with the site however, it seems that nobody at Makerbot really reads those forums, especially not since the last few years after certain moderators had left the site (remember [glitchpudding](https://www.thingiverse.com/glitchpudding/about)?)

It seems the whole website now runs on its own like a runaway train, with only some minimal intervention when things get too obviously bad for too long. From what I have heard, Makerbot (or its parent company Stratasys), the company that owns and manages Thingiverse, does not consider it a profitable website. Of course it is hard to quantify how sales of 3D printers would be affected if this gigantic repository of free-to-download shared 3D models would disappear, but this lack of interest from their part is the main reason why the amount of maintenance assigned to the site is very minimal. Of course this results in very slow responses to issues on the website.

My impression of what is happening here, is the following. I suspect that during management meetings, Thingiverse is treated as some kind of appendix whose usefulness is heavily doubted because the paper pushers do not see concrete revenue figures from it. They don't really dare to axe it, so instead they have reduced its resource allocations to the bare minimum. Every few months, one or two random Makerbot employees seem to be picked to take a look at this site which they are probably unfamiliar with, and they get a budget of a fixed number of days (hours?) to work on fixing problems. They then try to hack some fixes or new features into the probably horrible codebase, and leave behind these hacks to spawn new issues to be ‘solved’ by the next randomly picked persons. This is only a guess of mine based on observations from the last 3 years, but I work for a company that makes a product that has a large web-based UI part, and I have some experience and education in recognizing bad development practices without even looking at the code.

In my opinion, Makerbot should either:
- try to get a little bit of visible revenue from the site, be it through a few ads on the main page, such that there is an actual budget for maintaining it. This could convince the paper-pushers to allocate more resources to it.
- or, gather a community of motivated volunteers who will maintain the site for free, or in return for some small reward like discounts on certain products. There are certainly some people out there who have both the motivation and the technical knowledge to fix the most obvious issues in the above list.


## “But it's free!”

Every time someone posts a complaint about the broken state of the website on the Thingiverse Group forums, there will be replies in the vein of “but it is free, you have no right to complain.” I disagree. *There is no such thing as a free lunch.* Everyone who uploads content to the website, somehow *invests* in it. Some more than others, depending on how much effort they put in crafting the presentation and documentation of their Things. I have invested quite a lot, with about 120 published Things, each with pictures and an extended description. What I am now getting in return, is a pile of issues that make it harder to upload and edit Things, and I have no idea where the site is heading because of the total lack of communication from the part of the maintainers. This lack of communication and lack of care to properly test each change, feels very disrespectful, even though only in an indirect manner. It almost makes me feel like an idiot for having put all this effort in my uploads during the years I have been on the site. And now for some reason I am spending even more effort on creating and maintaining this issue tracker…

**The content creators are the only reason of existence for Thingiverse.** These creators deserve a little more respect than being ignored and being handed increasingly cumbersome tools to upload their content, without any explanation of what is being changed about the website, when, and why. There is no excuse for such poor communication in this era with so many different digital communication methods. I know it can be done better, because I was pretty content with how the site was maintained and how changes were communicated when I joined it in 2016. I have the feeling that the main breaking point for the website, was when [glitchpudding](https://www.thingiverse.com/glitchpudding/about) left somewhere in 2017. It seems to have gone downhill ever since. I am not the one who demands infinite progress in everything, but I do expect that when something is good, people do the effort to keep it good.

Another fact often mentioned in replies to complaints, is that there is no real alternative. This is true, I have looked at some other 3D model sharing websites and when it comes to the *amount* of content offered, none come close to Thingiverse. This is exactly the problem with Thingiverse itself: it has a near-monopoly. It is like Microsoft around the turn of the century. Their operating system was full of bugs and security holes, but it was the de facto standard, therefore they had little incentive to tackle those problems until finally some competition started appearing from Linux and Mac OS X. In the case of Thingiverse, the sheer number of models makes it very hard for other sites to compete, and there is no incentive for the owners of Thingiverse to make their website free of issues: everyone will stay for the content anyway, as long as it does not become totally unpractical to access it. This is a bad situation and nobody should defend it with any kind of argument.

I have stopped posting on the Group forums or even looking at them, because it's always the same: someone complains and then come the typical replies, first from the few seasoned trolls who feed on the anger of frustrated users by replying that everyone who complains is a fool and the site obviously works perfectly. Then from the members of the “but it's free” camp who do not want to be awoken from their state of denial. I have grown tired of this. I have a strong aversion in general for going through the same kind of discussion over and over again without any sign of the situation improving.

For the time being I will keep on maintaining this issue tracker, but since it does not seem to be appreciated nor help to improve the situation, I might just take it down within due time unless someone else wants to take over.
