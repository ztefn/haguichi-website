---
title: Debian, Raspberry Pi OS and Kali Linux
logo: logos/debian.svg
order: 2
---
Execute the following commands in a terminal:<br>
<code class="user clipboard">curl -fsSL "https://download.opensuse.org/repositories/home:ztefn:debian/$( [[ $(lsb_release -cs) =~ ^(forky|kali-rolling)$ ]] && echo Debian_Testing || [[ $(lsb_release -cs) == sid ]] && echo Debian_Unstable || echo Debian_13 )/Release.key" | gpg --dearmor | sudo tee /usr/share/keyrings/haguichi-debian.gpg &gt; /dev/null</code><br>
<code class="user clipboard">echo "deb [signed-by=/usr/share/keyrings/haguichi-debian.gpg] http://download.opensuse.org/repositories/home:/ztefn:/debian/$( [[ $(lsb_release -cs) =~ ^(forky|kali-rolling)$ ]] && echo Debian_Testing || [[ $(lsb_release -cs) == sid ]] && echo Debian_Unstable || echo Debian_13 )/ /" | sudo tee /etc/apt/sources.list.d/haguichi-debian.list</code><br>
<code class="user clipboard">sudo apt update</code><br>
<code class="user clipboard">sudo apt install -y haguichi</code>

After that you're all set and ready to use Haguichi. Visit the <a href="https://software.opensuse.org/download/package.iframe?project=home:ztefn:debian&package=haguichi" target="_blank" rel="noopener">package repository</a> for more details.
