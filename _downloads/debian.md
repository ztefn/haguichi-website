---
title: Debian, Raspberry Pi OS and Kali Linux
logo: logos/debian.svg
order: 2
---
Execute the following commands in a terminal:<br>
<code class="user">sudo sh -c 'echo "deb http://ppa.launchpad.net/webupd8team/haguichi/ubuntu bionic main" &gt; /etc/apt/sources.list.d/haguichi.list'</code><br>
<code class="user">sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys C2518248EEA14886</code><br>
<code class="user">sudo apt update</code><br>
<code class="user">sudo apt install -y haguichi</code>

After that you're all set and ready to use Haguichi.
