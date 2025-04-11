# Additional Experiments - Operating Systems  
**Name:** [Your Name]  
**Enrollment No:** [Your Enrollment No]  
**Subject:** Operating Systems  
**Branch:** Computer Science and Engineering  
**Semester:** [Your Semester]  
**College:** Acropolis Institute of Technology and Research  

---

## 3. Case Study: Linux Installation Step by Step

Linux is a free and open-source operating system based on the Unix architecture. It is widely used in servers, embedded systems, and desktop environments. The installation process varies slightly between distributions, but the core steps remain consistent. This case study uses **Ubuntu** as an example.

### Minimum System Requirements:
- Processor: 2 GHz dual-core processor or better
- RAM: 4 GB (2 GB minimum)
- Storage: 25 GB free space
- Bootable media: USB/DVD with Ubuntu ISO
- Internet connection (optional for updates)

### Pre-installation Steps:
1. **Download the ISO File**  
   Visit [https://ubuntu.com/download](https://ubuntu.com/download) and download the latest stable version of Ubuntu Desktop.

2. **Create Bootable USB Drive**  
   Use tools like **Rufus (Windows)** or **balenaEtcher (Linux/macOS)** to flash the ISO file onto a USB stick.

3. **Backup Important Data**  
   If you’re installing Linux alongside another OS, back up data to avoid data loss.

4. **Change Boot Priority**  
   Enter BIOS/UEFI settings (commonly by pressing `F2`, `DEL`, or `ESC` at startup) and set the USB device as the first boot option.

### Installation Steps:

| Step | Description |
|------|-------------|
| 1    | **Boot from USB**: Insert the USB drive and restart the system. Select the USB device from the boot menu. |
| 2    | **Try or Install Ubuntu**: You will see options to try or install Ubuntu. Choose **Install Ubuntu**. |
| 3    | **Choose Keyboard Layout**: Select your preferred keyboard layout and click Continue. |
| 4    | **Updates and Software**: Choose Normal/Minimal installation and whether to download updates during installation. |
| 5    | **Installation Type**: Choose to erase disk, install alongside another OS, or manual partitioning. |
| 6    | **Partitioning**: If manual, create root (`/`), swap, and optionally home (`/home`) partitions. |
| 7    | **Set Timezone**: Select your region and time zone using the map or dropdown. |
| 8    | **Create User Account**: Enter your name, computer name, username, and password. |
| 9    | **Installation Process**: Click Install Now and confirm partition changes. Wait for the process to complete. |
| 10   | **Restart and Use**: Once installed, remove the USB and reboot the system. Log in with your credentials. |

### Post-installation:
- Install updates: `sudo apt update && sudo apt upgrade`
- Install drivers and additional software as needed
- Explore the Ubuntu Software Center for more applications

---

## 4. Case Study: Network and Distributed Operating Systems

Network and Distributed Operating Systems are designed to manage and coordinate computers connected via a network. They enable sharing of resources, load balancing, and improved fault tolerance.

### Network Operating System (NOS)

A **Network Operating System** enables communication between computers over a network and provides services such as file sharing, printer access, and user management.

| Feature             | Description |
|---------------------|-------------|
| Centralized Control | One main server controls access and resources. |
| User Authentication | Users must log in to access shared resources. |
| File & Resource Sharing | Files, printers, and applications can be shared across the network. |
| Examples            | Novell NetWare, Windows Server, UNIX-based servers |

**Advantages:**
- Centralized backups and security
- Resource sharing reduces cost
- Easy user and device management

**Disadvantages:**
- Server dependency: failure can disrupt the whole network
- Costlier setup and maintenance

---

### Distributed Operating System (DOS)

A **Distributed Operating System** manages a group of independent computers and makes them appear to the users as a single coherent system.

| Feature               | Description |
|-----------------------|-------------|
| Transparency          | Users do not need to know where processes run or where files are stored |
| Fault Tolerance       | If one node fails, the system continues functioning using other nodes |
| Load Balancing        | Work is distributed evenly across all connected machines |
| Examples              | Google File System, Amoeba, Plan 9, Hadoop YARN |

**Advantages:**
- High availability and reliability
- Efficient resource utilization
- Scalability across multiple machines

**Disadvantages:**
- Complexity in design and implementation
- Difficult to debug and test
- Security management is more complex

---

### Comparison Table:

| Feature               | Network OS                            | Distributed OS                                |
|-----------------------|----------------------------------------|-----------------------------------------------|
| System View           | Multiple independent systems           | Single system image across multiple machines  |
| Transparency          | Limited                                | High (location, access, replication, etc.)    |
| Resource Management   | Centralized                            | Decentralized and dynamic                     |
| Fault Tolerance       | Low                                    | High                                          |
| Examples              | Windows Server, UNIX                   | Amoeba, Hadoop, Google File System            |

---