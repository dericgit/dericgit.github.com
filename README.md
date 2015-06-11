##Learn JavaScript Pattern
安装Shadowsocks
$ sudo apt-get update
$ sudo apt-get install python-gevent python-pip
$ sudo pip install shadowsocks
$ apt-get install python-m2crypto
配置Shadowsocks
创建config.json配置文件：
1
$ vi /etc/shadowsocks.json
修改config.json
{
    "server":"0.0.0.0",
    "server_port":8388,
    "local_port":1080,
    "password":"password",
    "timeout":600,
    "method":"aes-256-cfb"
}
配置一下你的服务器IP和密码就可以了。
运行Shadowsocks
1
2
3
$ su -
# ssserver -c /etc/shadowsocks.json -d start
# ssserver -c /etc/shadowsocks.json -d stop
注意要切换到root用户下才能运行。
