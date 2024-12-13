# Project-Epitech-Network
## Ryan, Gaspard

Simulation d'une architecture réseau comprenant un serveur DHCP (servant de routeur), un serveur Web, et deux clients (admin et employé).\
Début : Lundi 2 décembre 2024\
Fin : Dimanche 15 décembre 2024 à 23h42

## Architecture : 

- **Gateway** : OpenBSD (no GUI)
  - 4 cartes réseaux
  - 1 pont ou NAT
  - 3 réseaux privés
  - Fournit des adresses IP via DHCP pour les réseaux internes

- **Web_Server** : FreeBSD (no GUI)
  - 1 carte réseau
  - Installation de NGINX et PHP 7.4
  - Configuration de l'adresse IP statique (192.168.42.70)

- **Clients** : Debian 12 (with GUI)
  - Admin et Employé (Debian 12)
  - 1 carte réseau
  - Configuration automatique via DHCP
  - L'Admin peut se connecter en SSH au Web_Server
  - L'Employé, lui, ne peut pas

## Configuration :

### Gateway :

#### Réseau

La configuration des différentes cartes réseau se fait en modifiant les fichiers suivants : /etc/hostname.'nomDeLaCarte'

#### DHCP

La configuration du serveur DHCP se fait en modifiant le fichier suivant : /etc/dhcpd.conf

- **LAN 1 : Admin**
   - Réseau : 192.168.42.0
   - IP : 192.168.42.1
   - Diffusion : 192.168.42.63
   - Plage DHCP : 192.168.42.40 - 192.168.42.60

- **LAN 2 : Serveur**
   - Réseau : 192.168.42.64
   - IP : 192.168.42.65
   - Diffusion : 192.168.42.127
   - Plage DHCP : 192.168.42.70 - 192.168.42.110
   - (Bien penser à ajouter une ligne permettant d'attribuer à coup sûr l'IP 192.168.42.70 au Web_Server)

- **LAN 3 : Employé**
   - Réseau : 192.168.42.128
   - IP : 192.168.42.129
   - Diffusion : 192.168.42.191
   - Plage DHCP : 192.168.42.140 - 192.168.42.180

On démarre le serveur DHCP en faisant : "rcctl start dhcpd"

#### Filtrage de Paquets

Le filtrage se fait en modifiant le fichier : /etc/pf.conf
Puis en le démarrant grâce à : "pfctl -f /etc/pf.conf"

- La LAN admin peut accéder à tout le monde sur le réseau serveur, sur tous les ports.
- La LAN des employés peut accéder uniquement au serveur via les protocoles HTTP et HTTPS.
- Tous les LANs peuvent accéder à Internet, pinger des dispositifs sur un autre sous-réseau, et récupérer des informations DHCP et DNS depuis la passerelle.

### Web_Server :

#### Réseau

La configuration de la carte réseau se fait en modifiant le fichier suivant : /etc/rc.conf

#### Installation du Serveur Web

1. Installer et configurer NGINX.
2. Installer PHP 7.4 et les modules requis.
3. Déployer la page fournie.
4. Installer `mysql80-server` et la base de données `nsa501`.
5. Créer un utilisateur pour la base de données :
   - Utilisateur : `backend`
   - Droits : Tous les droits sur la table `nsa501`

### Clients 

Les deux machines peuvent être installées avec n'importe quel système, mais avec une interface graphique. Nous avons ici utilisé des machines sous environement Debian 12.\
La configuration réseau est récupérée automatiquement via DHCP. Pour cela, on modifie le fichier suivant sur chacune des machines : /etc/network/interfaces

### Conclusion

Ce projet vise à créer un environnement de travail sécurisé et fonctionnel, permettant aux utilisateurs d'accéder aux ressources nécessaires tout en respectant les règles de sécurité établies.
