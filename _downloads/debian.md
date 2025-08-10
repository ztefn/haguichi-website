---
title: Debian, Raspberry Pi OS, Kali Linux and MX Linux
logo: logos/debian.svg
order: 2
---
Execute the following commands in a terminal:<br>
<code class="user clipboard">curl 'https://keyserver.ubuntu.com/pks/lookup?op=get&search=0xd0712f35b20337c00c94e829eb75b0ebe2c821ac' | gpg --dearmor | sudo tee /usr/share/keyrings/haguichi-debian.gpg &gt; /dev/null</code><br>
<code class="user clipboard">echo "deb [signed-by=/usr/share/keyrings/haguichi-debian.gpg] http://ppa.launchpad.net/ztefn/haguichi-debian/ubuntu $( [[ $(lsb_release -cs) =~ ^(trixie|forky|sid|kali-rolling)$ ]] && echo plucky || echo bionic ) main" | sudo tee /etc/apt/sources.list.d/haguichi-debian.list</code><br>
<code class="user clipboard">sudo apt update</code><br>
<code class="user clipboard">sudo apt install -y haguichi</code>

After that you're all set and ready to use Haguichi. Visit <a href="https://launchpad.net/~ztefn/+archive/ubuntu/haguichi-debian" target="_blank" rel="noopener">the PPA page on Launchpad</a> for more details about this repository.
