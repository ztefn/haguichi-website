---
title: Goodbye Mono, Hello Vala!
date: 2015-08-12T20:30:51+00:00
author: ztefn
layout: post
permalink: /news/goodbye-mono-hello-vala/
tags: [packaging, porting]
---
A long time ago, in the year 2007, yours truly was slowly but determinately switching to Linux. Inspired by the consistent look and feel of GTK+ applications within the GNOME2 desktop environment, I wanted to start programming using this toolkit. As command line only application Hamachi was the perfect candidate to wrap a GUI around. Sure, there were already <a href="http://linux.softpedia.com/downloadTag/Hamachi%20GUI" target="_blank">some</a> GUI&#8217;s available but neither of the two GTK+ based ones even remotely followed the <a href="https://developer.gnome.org/hig-book/2.32/" target="_blank">GNOME Human Interface Guidelines</a>. So in good open source tradition decided I could do better and started my own&#8230;

## Mono

At that moment in time I had mainly experience with languages like Javascript, PHP, ActionScript and a bit of Java. So I was looking for language with familiar syntax (exit Python) and not too much of a steep learning curve (exit C/C++). Other very important requirement was having an IDE providing code completion for GTK+ so that I could easily explore available properties, functions and signals. Behold <a href="http://www.monodevelop.com/" target="_blank">MonoDevelop</a>; an excellent IDE that also provided integrated localization and packaging support &#8211;which turns out handy when you actually want to ship your application. Also a lot of great applications like <a href="http://banshee.fm/" target="_blank">Banshee</a> and <a href="http://f-spot.org/" target="_blank">F-spot</a> were developed with Mono and the GTK+ binding for C# called GTK#. There was a vivid community backed by Novell surrounding the platform, so Mono and C# was the obvious and logical choice for me.

## Stagnation

It was most likely the <a href="https://www.novell.com/news/press/2010/11/novell-agrees-to-be-acquired-by-attachmate-corporation.html" target="_blank">acquisition</a> of Novell by Attachmate on November 22, 2010 that ultimately lead to the neglect of the platform, and specifically GTK#. <a href="http://www.mono-project.com/docs/gui/gtksharp/plan/" target="_blank">Plans</a> presented never came to fruition. Xamarin, the company that eventually took over control of Mono, only showed interest in mobile. While there has been still some <a href="https://github.com/mono/gtk-sharp/commits/master" target="_blank">community effort</a> behind GTK# 3, the progress is slow and there&#8217;s no indication a stable release is happening anytime soon. Besides, it&#8217;s still targeting 3.0 API&#8217;s instead of anything current like 3.14.

## Vala

In 2011 it was the first time I looked at Vala as possible alternative for the stagnating Mono platform. It&#8217;s close connection to the GObject system guaranteed up-to-date bindings while still providing a clean C# like syntax. Unfortunately, the few development tools for Vala that I found, <a href="https://launchpad.net/valide" target="_blank">Val(a)IDE</a> and <a href="https://code.google.com/p/vtg/" target="_blank">Vala Toys for gEdit</a>, were totally useless. I ran away as fast as I could and didn&#8217;t look back for more than three years. Then, in December 2014 I stumbled upon <a href="http://valama.github.io/valama/" target="_blank">Valama</a>, a Vala IDE that was actually able to compile and run code with the click of a button. Valama also provided working autocompletion and syntax checking (although it crashed a lot while doing so). Enough to set everything in motion.

## Porting

As basis I used the <a href="https://code.launchpad.net/~ztefn/haguichi/gtk3" target="_blank">GTK# 3.0</a> branch of Haguichi. I started out porting (end)classes that didn&#8217;t have any dependencies on other classes, like _Text_, _Settings_, _Utils_, and _Debug_. Initially, the main class was only filled with test calls to functions in the ported classes. From there on I worked my way up to the classes that had more dependencies on other classes. By temporarily commenting out code depending on classes that were not yet ported, at least many parts could be build and tested. Finally, everything was brought together in the core classes (_Window_, _Controller_, _Main_). By sticking to the plan of porting at least one class a day, after a few weeks the port was essentially working.
  
After that, an extensive process of testing, bug fixing, fine-tuning, replacing deprecated API&#8217;s (GTK+ developers just love deprecating things) and implementing new API&#8217;s (GApplication, GAction, GMenu, Headerbar, Popover, etc) followed.

## Packaging

When using MonoDevelop I was able to generate installation packages containing makefiles from within the IDE. Although Valama does generate makefiles (CMake or Autotools) necessary to build and run your application, it doesn&#8217;t provide a way to specify targets for data files. Not eager to write CMake files manually, I thankfully discovered <a href="https://github.com/rastersoft/autovala" target="_blank">Autovala</a>, a program that automatically generates them based on the project&#8217;s source and data files.

## Epilogue

While there&#8217;s been lots of hate geared towards Mono from some vocal people, those same people failed to provide a useful alternative for years. Even today, there&#8217;s no Vala IDE that matches the features of MonoDevelop even closely. Ludicrously, <a href="https://wiki.gnome.org/Apps/Builder" target="_blank">Builder</a> &#8211;the new IDE for GNOME&#8211; doesn&#8217;t even treat Vala like a first class citizen, and only plans to add Vala support in a <a href="https://wiki.gnome.org/Apps/Builder/Planning#6" target="_blank">distant future</a>&#8230;
