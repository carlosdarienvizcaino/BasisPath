if [ "$(docker ps -aq)" ] ; then
    echo '*************************************************************'
    echo 'Removing containers'
    `docker stop $(docker ps -aq)`
    `docker rm $(docker ps -aq)`
fi


if [ "$(docker images -q)" ] ; then
    echo '*************************************************************'
    echo 'Removing images'
    `docker rmi $(docker images -q)`	
    return 0
fi
