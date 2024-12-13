type Disk = (number | null)[]

function expandDiskMap(diskMap: string): { disk: Disk; id: number } {
  const disk: Disk = []
  let id = -1
  for (let i = 0; i < diskMap.length; i++) {
    let next = null
    if (i % 2 === 0) {
      next = ++id
    }
    for (let j = 0; j < Number(diskMap[i]); ++j) {
      disk.push(next)
    }
  }
  return { disk, id }
}

function checkSum(disk: Disk): number {
  let checksum = 0
  for (let i = 0; i < disk.length; ++i) {
    if (disk[i]) {
      checksum += i * Number(disk[i])
    }
  }
  return checksum
}

function defrag(disk: Disk): Disk {
  const d = structuredClone(disk)
  for (let i = d.length; i > 0; --i) {
    if (d[i]) {
      const freeIx = d.indexOf(null)
      if (freeIx < i) {
        ;[d[freeIx], d[i]] = [d[i], null]
      }
    }
  }
  return d
}

export function partOne(text: string): number {
  return checkSum(defrag(expandDiskMap(text).disk))
}
