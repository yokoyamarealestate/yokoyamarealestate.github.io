import glob
import cv2
import os
import shutil

this_dir = os.path.dirname(os.path.abspath(__file__))
dirs = [i for i in glob.glob(os.path.join(this_dir, '*')) if os.path.isdir(i)]

for i in dirs:
	icon_dir = os.path.join(i, 'icons')
	if os.path.exists(icon_dir):
		shutil.rmtree(icon_dir)
	os.mkdir(icon_dir)

	images = [k for k in glob.glob(os.path.join(i, '*')) if k.lower().endswith('.jpg')]
	for j in images:
		img = cv2.imread(j)
		h, w, _ = img.shape

		if w > h:
			x1, x2 = w/2-h/2, w/2+h/2
			square_img = img[:, x1:x2]
		else:
			y1, y2 = h/2-w/2, h/2+w/2
			square_img = img[y1:y2, :]

		# if w < h:
		# 	new_h = w*3024/4032
		# 	img = img[h/2-new_h/2:h/2+new_h/2, :]
		# img = cv2.resize(img, (252,189), interpolation=cv2.INTER_AREA)
		img = cv2.resize(img, (250,250), interpolation=cv2.INTER_AREA)
		basename = os.path.basename(j)
		filepath = os.path.join(icon_dir, basename)
		cv2.imwrite(filepath, img)