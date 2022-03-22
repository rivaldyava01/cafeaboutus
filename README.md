# cafe about us
api cafe about us

pindah ke mysql
sudo mysql -u root

pindah ke server
ssh -i "cafeaboutus.pem" ubuntu@ec2-13-229-66-147.ap-southeast-1.compute.amazonaws.com
cd cafeaboutus

running
npm run index

keluar dari mysql
exit

keluar dari server
exit

running server 
pm2 start npm --name "about-us" -- run "index" 

check server
pm2 status

stop server
pm2 stop about-us